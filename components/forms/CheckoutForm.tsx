import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  emailAddress: yup.string().email().required(),
  nameOnCard: yup.string().required(),
  cardNumber: yup.string().required(),
  expirationDate: yup.string().required(),
  cvc: yup.string().required(),
  company: yup.string().required(),
  address: yup.string().required(),
  apartment: yup.string().required(),
  city: yup.string().required(),
  region: yup.string().required(),
  postalCode: yup.string().required(),
  sameAsShipping: yup.boolean().required(),
});
type CheckoutFormData = yup.InferType<typeof schema>;

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1"
      onSubmit={onSubmit}
    >
      <div className="max-w-lg mx-auto lg:max-w-none">
        <section aria-labelledby="contact-info-heading">
          <h2
            id="contact-info-heading"
            className="text-lg font-medium text-gray-900"
          >
            Contact information
          </h2>

          <div className="mt-6">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <Input
                type="email"
                id="email-address"
                {...register("emailAddress", { required: "wymagane" })}
                autoComplete="email"
                error={errors.emailAddress}
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="payment-heading" className="mt-10">
          <h2
            id="payment-heading"
            className="text-lg font-medium text-gray-900"
          >
            Payment details
          </h2>

          <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
            <div className="col-span-3 sm:col-span-4">
              <label
                htmlFor="name-on-card"
                className="block text-sm font-medium text-gray-700"
              >
                Name on card
              </label>
              <div className="mt-1">
                <Input
                  id="name-on-card"
                  {...register("nameOnCard")}
                  autoComplete="cc-name"
                  error={errors.nameOnCard}
                />
              </div>
            </div>

            <div className="col-span-3 sm:col-span-4">
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-gray-700"
              >
                Card number
              </label>
              <div className="mt-1">
                <Input
                  id="card-number"
                  {...register("cardNumber")}
                  autoComplete="cc-number"
                  error={errors.cardNumber}
                />
              </div>
            </div>

            <div className="col-span-2 sm:col-span-3">
              <label
                htmlFor="expiration-date"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration date (MM/YY)
              </label>
              <div className="mt-1">
                <Input
                  {...register("expirationDate")}
                  id="expiration-date"
                  autoComplete="cc-exp"
                  error={errors.expirationDate}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700"
              >
                CVC
              </label>
              <div className="mt-1">
                <Input
                  {...register("cvc")}
                  id="cvc"
                  autoComplete="csc"
                  error={errors.cvc}
                />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="shipping-heading" className="mt-10">
          <h2
            id="shipping-heading"
            className="text-lg font-medium text-gray-900"
          >
            Shipping address
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
            <div className="sm:col-span-3">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <div className="mt-1">
                <Input
                  id="company"
                  {...register("company")}
                  error={errors.company}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <Input
                  id="address"
                  {...register("address")}
                  autoComplete="street-address"
                  error={errors.address}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="apartment"
                className="block text-sm font-medium text-gray-700"
              >
                Apartment, suite, etc.
              </label>
              <div className="mt-1">
                <Input
                  id="apartment"
                  {...register("apartment")}
                  error={errors.apartment}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="mt-1">
                <Input id="city" {...register("city")} error={errors.city} />
              </div>
            </div>

            <div>
              <label
                htmlFor="province"
                className="block text-sm font-medium text-gray-700"
              >
                Province
              </label>
              <div className="mt-1">
                <Input
                  id="region"
                  {...register("region")}
                  error={errors.region}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Postal code
              </label>
              <div className="mt-1">
                <Input
                  id="postal-code"
                  {...register("postalCode")}
                  autoComplete="postal-code"
                  error={errors.postalCode}
                />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="billing-heading" className="mt-10">
          <h2
            id="billing-heading"
            className="text-lg font-medium text-gray-900"
          >
            Billing information
          </h2>

          <div className="mt-6 flex items-center">
            <input
              id="same-as-shipping"
              {...register("sameAsShipping")}
              type="checkbox"
              checked
              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <div className="ml-2">
              <label
                htmlFor="same-as-shipping"
                className="text-sm font-medium text-gray-900"
              >
                Same as shipping information
              </label>
            </div>
          </div>
        </section>

        <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
          <button
            type="submit"
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:ml-6 sm:order-last sm:w-auto"
          >
            Continue
          </button>
          <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
            You won&apos;t be charged until the next step.
          </p>
        </div>
      </div>
    </form>
  );
};
