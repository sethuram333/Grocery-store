import React from 'react'
import Card from "../../components/cards/Card";
import Banner from '../../components/Banner/Banner';

const Meat = () => {
    const renderVegitables = vegitables.map((item)=>{
        return(
            <Card image={item.image} title={item.title} price={item.price}/>
        )
    })

  return (
     <>
  <div className='2xl:container mx-auto mt-25'>
    
 <Banner title="Vegetables" bgImage="https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/WhatsApp%20Image%202025-11-02%20at%2012.32.59%20PM.jpeg"/>

    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-2 bg-[#EEE] shadow-xl mt-10'>
     {renderVegitables}
        
    </div>
  </div>
  </>
  )
}

export default Meat

const vegitables =[
    {
    id: 1,
    title: "Tomato",
    category: "Vegetables",
    price: "25",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/download%20(3).jpeg",
  },
  {
    id: 2,
    title: "Potato",
    category: "Vegetables",
    price: "30",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/download%20(4).jpeg",
  },
  {
    id: 3,
    title: "Ladies Finger",
    category: "Vegetables",
    price: "32",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/download%20(5).jpeg?updatedAt=1759499563513",
  },
  {
    id: 4,
    title: "Onion",
    category: "Vegetables",
    price: "45",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%205.20.14%20PM.jpeg",
  },
  {
    id: 5,
    title: "Cauli Flower",
    category: "Vegetables",
    price: "40",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%204.12.55%20PM%20(1).jpeg",
  },
  {
    id: 6,
    title: "Brinjal",
    category: "Vegetables",
    price: "53",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%204.12.55%20PM.jpeg",
  },
  {
    id: 7,
    title: "Carrot",
    category: "Vegetables",
    price: "64",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%204.12.56%20PM%20(1).jpeg",
  },
  {
    id: 8,
    title: "Beetroot",
    category: "Vegetables",
    price: "56",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/vegies/WhatsApp%20Image%202025-10-31%20at%204.12.56%20PM.jpeg",
  },
]