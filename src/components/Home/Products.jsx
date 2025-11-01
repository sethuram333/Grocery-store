import React, { useState } from "react";
import Topic from "../Topic/Topic";
import productList from "../productList/productList";
import Card from "../cards/Card";
import Button from "../Button/Button";


const Products = () => {
  const categories = ["All", "Meat", "Vegetables", "Dairy", "Fruits"];

  const [activeTab, setActiveTab] = useState("All");

  // Filter products based on selected category
  const filteredItems =
    activeTab === "All"
      ? productList
      : productList.filter((item) => item.category === activeTab);

    
  return (
    <section>
      <div className="2xl:container mx-auto py-20">
        <Topic first="Our" second="Products" />

        {/* Category Buttons */}
        <div className="flex gap-2 md:gap-4 justify-center mt-10 flex-wrap">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`text-[14px] md:text-lg px-4 py-2 font-[poppins] rounded-md transition-all duration-300
                ${
                  activeTab === item
                    ? "bg-orange-500 text-white"
                    : "bg-[#EEE] text-black hover:bg-orange-100"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product Listing */}
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-20">
          {filteredItems.slice(0, 8).map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Button  content="View All" link='allproducts' />
        </div>
      </div>
    </section>
  );
};

export default Products;
