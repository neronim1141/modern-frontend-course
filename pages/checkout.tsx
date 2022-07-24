import { CheckoutForm } from "../components/forms/CheckoutForm";
import { Main } from "../components/Main";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/solid";
const Checkout = () => {
  return (
    <Main>
      <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
        <h1 className="sr-only">Order information</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>

            <ul
              role="list"
              className="text-sm font-medium text-gray-900 divide-y divide-gray-200"
            >
              <li className="flex items-start py-6 space-x-4">
                {/* image */}
                <div className="flex-none w-20 h-20 rounded-md object-center object-cover" />
                <div className="flex-auto space-y-1">
                  <h3>Micro Backpack</h3>
                  <p className="text-gray-500">Moss</p>
                  <p className="text-gray-500">5L</p>
                </div>
                <p className="flex-none text-base font-medium">$70.00</p>
              </li>
            </ul>

            <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Subtotal</dt>
                <dd>$320.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Shipping</dt>
                <dd>$15.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Taxes</dt>
                <dd>$26.80</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$361.80</dd>
              </div>
            </dl>

            <div className="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
              <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
                <div className="max-w-lg mx-auto">
                  <button
                    type="button"
                    className="w-full flex items-center py-6 font-medium"
                    aria-expanded="false"
                  >
                    <span className="text-base mr-auto">Total</span>
                    <span className="text-base mr-2">$361.80</span>
                    <ChevronUpIcon
                      className="w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>

              <div>
                {/* <!--
              Mobile summary overlay, show/hide based on mobile summary state.

              Entering: "transition-opacity ease-linear duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "transition-opacity ease-linear duration-300"
                From: "opacity-100"
                To: "opacity-0"
            --> */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-25"
                  aria-hidden="true"
                ></div>

                {/* <!--
              Mobile summary, show/hide based on mobile summary state.

              Entering: "transition ease-in-out duration-300 transform"
                From: "translate-y-full"
                To: "translate-y-0"
              Leaving: "transition ease-in-out duration-300 transform"
                From: "translate-y-0"
                To: "translate-y-full"
            --> */}
                <div className="relative bg-white px-4 py-6 sm:px-6">
                  <dl className="max-w-lg mx-auto space-y-6">
                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Subtotal</dt>
                      <dd>$320.00</dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Shipping</dt>
                      <dd>$15.00</dd>
                    </div>

                    <div className="flex items-center justify-between">
                      <dt className="text-gray-600">Taxes</dt>
                      <dd>$26.80</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CheckoutForm />
      </main>
    </Main>
  );
};

export default Checkout;
