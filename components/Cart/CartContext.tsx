import React, { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

interface CartItem {
  id: string;
  price: number;
  title: string;
  count: number;
}

interface CartState {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemfromCart: (id: CartItem["id"]) => void;
}

const getCartFromLocalStorage = () => {
  const cartSaved = localStorage.getItem("cart");

  if (!cartSaved) return [];

  try {
    return JSON.parse(cartSaved);
  } catch (e) {
    console.error(e);
    return [];
  }
};
const setCartInLocalStorage = (items: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

export const CartStateContext = createContext<CartState | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);

  useEffect(() => {
    setCartItems(getCartFromLocalStorage());
  }, []);

  useEffect(() => {
    if (cartItems === undefined) return;
    setCartInLocalStorage(cartItems);
  }, [cartItems]);

  const addItemToCart = (item: CartItem) => {
    setCartItems((prevItems = []) => {
      const existingItem = prevItems.find((el) => el.id === item.id);
      if (!existingItem) return [...prevItems, item];
      const newItem = {
        ...existingItem,
        count: existingItem.count + item.count,
      };
      return prevItems.map((el) => (el.id === item.id ? newItem : el));
    });
  };

  const removeItemfromCart = (id: CartItem["id"]) => {
    setCartItems((prevItems = []) => {
      const existingItem = prevItems.find((el) => el.id === id);
      if (!existingItem) return prevItems;
      if (existingItem.count <= 1)
        return prevItems.filter((el) => el.id !== id);

      const newItem = {
        ...existingItem,
        count: existingItem.count - 1,
      };
      return prevItems.map((el) => (el.id === id ? newItem : el));
    });
  };

  return (
    <CartStateContext.Provider
      value={{ items: cartItems ?? [], addItemToCart, removeItemfromCart }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) throw new Error("You forgot CartProvider");
  return cartState;
};
