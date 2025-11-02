import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between border p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-[poppins] gap-4">

      {/* ❌ Remove Button */}
      <div className="flex justify-end md:hidden">
        <button className="text-gray-500 hover:text-red-500">
          <RxCross2 size={20} />
        </button>
      </div>

      {/* 🖼️ Image + Details */}
      <div className="flex items-center gap-4 w-full md:w-[30%]">
        <div className="w-20 h-20 bg-red-400 rounded overflow-hidden ">
          <img
            src=""
            
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-base sm:text-lg">Fresh Apple</p>
          <p className="text-gray-500 text-sm">Fruits</p>
        </div>
      </div>

      {/* 💰 Price */}
      <div className="text-gray-800 font-medium text-center md:w-[10%]">
        ₹100
      </div>

      {/* ➕ Quantity Controls */}
      <div className="flex items-center justify-center gap-3 md:w-[15%]">
        <button className="bg-zinc-300 px-3 py-2 rounded-md hover:bg-orange-500 transition-all">
          <FiMinus size={18} />
        </button>
        <p className="font-medium">1</p>
        <button className="bg-zinc-300 px-3 py-2 rounded-md hover:bg-orange-500 transition-all">
          <FiPlus size={18} />
        </button>
      </div>

      {/* 💵 Total */}
      <div className="font-semibold text-gray-800 text-center md:w-[10%]">
        ₹100
      </div>

      {/* ❌ Remove Button (Desktop view) */}
      <div className="hidden md:block">
        <button className="text-gray-500 hover:text-red-500">
          <RxCross2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
