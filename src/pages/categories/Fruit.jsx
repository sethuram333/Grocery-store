import React from "react";
import Card from "../../components/cards/Card";
import Banner from "../../components/Banner/Banner";
const Fruit = () => {
const renderFruits = fruits.map((item)=>{
        return(
            <Card image={item.image} title={item.title} price={item.price}/>
        )
    })

  return   <>
  <div className='2xl:container mx-auto mt-25'>
    
   <Banner title="Fruits" bgImage="https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/WhatsApp%20Image%202025-11-02%20at%2012.29.28%20PM.jpeg"/>

    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-2 bg-[#EEE] shadow-xl mt-10'>
     {renderFruits}
        
    </div>
  </div>
  </>
};

export default Fruit;

const fruits = [
  {
    id: 1,
    title: "Apple",
    price: "50",
    category: "Fruits",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/download.jpeg",
  },
  {
    id: 2,
    title: "Banana",
    category: "Fruits",
    price: "25",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/download%20(2).jpeg",
  },
  {
    id: 3,
    title: "Grapes",
    category: "Fruits",
    price: "75",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/download%20(1).jpeg",
  },
  {
    id: 4,
    title: "Orange",
    category: "Fruits",
    price: "55",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/orange.jpg",
  },
  {
    id: 5,
    title: "strawberry",
    category: "Fruits",
    price: "100",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/strawberry.jpeg",
  },
  {
    id: 6,
    title: "pine apple",
    category: "Fruits",
    price: "60",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/WhatsApp%20Image%202025-10-31%20at%203.55.05%20PM%20(2).jpeg",
  },
  {
    id: 7,
    title: "Guava",
    category: "Fruits",
    price: "45",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/WhatsApp%20Image%202025-10-31%20at%203.55.05%20PM.jpeg",
  },
  {
    id: 8,
    title: "Mango",
    category: "Fruits",
    price: "35",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/fruits/WhatsApp%20Image%202025-10-31%20at%203.55.06%20PM.jpeg",
  },
];
