import React from "react";
import CartCard from "../../components/cartCard/CartCard";

const Cart = () => {
  return (
    <div className="2xl:container mx-auto mt-20">
      {/* 🛒 Page Title */}
      <div className="w-[90%] mx-auto flex justify-center items-center bg-center bg-cover h-[20vh]  mt-25 rounded-2xl bg-gray-100 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-800 p-4 rounded-md font-bold font-[poppins]  ">
          Shopping Cart
        </h2>
      </div>

      {/* 🧺 Cart Layout */}
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-10">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2">
          {/* Header (hidden on mobile) */}
          <div className="hidden md:flex justify-between bg-green-600 text-white p-4 font-[poppins] rounded-t-md text-sm sm:text-base">
            <p className="w-[30%]">Items</p>
            <p className="w-[10%] text-center">Price</p>
            <p className="w-[15%] text-center">Quantity</p>
            <p className="w-[10%] text-center">Subtotal</p>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-4 bg-white shadow-md p-4 sm:p-5 rounded-md md:rounded-b-md">
            <p className="text-center text-gray-500 py-10">
              Your cart is empty 🛒
            </p>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-gray-100 p-5 sm:p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>Total items</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>0</span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>0</span>
          </div>

          <button className="w-full bg-green-600 text-white py-2 mt-5 rounded-md hover:bg-green-700 transition-all">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
