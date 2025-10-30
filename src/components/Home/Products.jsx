import React from "react";
import Topic from "../Topic/Topic";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = ["All", "Fruits", "Meat", "Vegetables", "Dairy"];

  const renderCategories = categories.map((item) => {
    return (
     <button key={item} className="bg-[#EEE] text-[14px] md:text-lg px-3 py-2 font-[poppins]">{item}</button>
    );
  });

  return (
    <>
      <section>
        <div className="2xl:container mx-auto bg-red-300 py-20">
          <Topic first="Our" second="Products" />

          <div className="flex gap-1 md:gap-3 justify-center mt-10 rounded">
            {renderCategories}
            </div>
        </div>
      </section>
    </>
  );
};

export default Products;
