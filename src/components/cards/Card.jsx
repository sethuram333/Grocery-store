import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Card = ({ image, title, price }) => {
  return (
    <>
      <div className="bg-white shadow p-5 rounded-xl">
        {/*icons */}
        <div className="flex justify-between">
          <span className="text-3xl text-zinc-300">
            <CiHeart />
          </span>
          <button className="bg-orange-500 text-white text-xl px-4 py-2 rounded">
            <FaPlus />
          </button>
        </div>
        {/* image  */}
        <div className="w-full h-48 ">
          <img src={image} className="w-full h-full object-contain "/>
        </div>

        {/* Title,price,button*/}
        <div className="text-center">
          <h3 className="font-[poppins] text-2xl font-semibold text-green-700 mt-4">{title}</h3>
          <p className="font-[poppins] text-xl font-bold mt-4 mb-3">₹{price}</p>
          <Button content="Shop Now" />
        </div>
      </div>
    </>
  );
};

export default Card;
