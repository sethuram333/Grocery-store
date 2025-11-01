import React from "react";
import Topic from "../Topic/Topic";
import Button from "../Button/Button";

const Categories = () => {
  const renderCards = category.map((card) => {
    return (
      <div
        key={card.id}
        className=" bg-[#EEE] shadow-md rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
      >
        <div className="w-full h-55 overflow-hidden  ">
          <img
            src={card.image}
            className="w-full h-full object-cover "
          />
        </div>

        <div className="flex flex-col justify-between p-5 font-[poppins] gap-3">
          <h3 className="text-xl font-semibold text-green-800">{card.title}</h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {card.description}
          </p>
          <div className="mt-4">
            <Button content="See All" link={card.link} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section>
        <div className="2xl:container mx-auto  py-20 ">
          <Topic first="Shop" second="By Category" />
          {/* category card */}
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-15">
            {renderCards}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;

const category = [
  {
    id: 1,
    title: "Fruits",
    description:
      "Fresh and organic produce sourced daily from local farms.Explore a wide range seasonal Fruits",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/categories/fruits.jpg",
      link:'allfruits'
  },
  {
    id: 2,
    title: "Meat Product",
    description:
      "High quality, responsiblity sourced meat and sea food. Choose from fresh cuts, marinated options, and more.",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/categories/meat%20product.jpeg",
      link:'meatproducts'
  },
  {
    id: 3,
    title: "Vegetables",
    description:
      "Fresh and organic produce sourced daily from local farms.Explore a wide range crisp Vegetables",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/categories/vegetables.jpg?updatedAt=1759409578589",
      link:'allvegetables'
  },
  {
    id: 4,
    title: "Dairy Product",
    description:
      "Wholesome dairy products and free-range eggs.From creamy milk and yogurt to artisanal cheeses",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/categories/dairy%20product.jpeg",
      link:'dairyproducts'
  },
];
