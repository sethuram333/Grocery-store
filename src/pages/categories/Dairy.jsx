import React from 'react'
import Card from "../../components/cards/Card";

const Meat = () => {
    const renderDairyProducts = dairyProducts.map((item)=>{
        return(
            <Card image={item.image} title={item.title} price={item.price}/>
        )
    })

  return (
     <>
  <div className='2xl:container mx-auto mt-25'>
    
    <div className='w-[90%] mx-auto bg-amber-300 '>
     <h1 className='text-3xl font-[poppins] text-center py-5 '>Meat Products</h1>
    </div>

    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-15 px-2 bg-[#EEE] shadow-xl'>
     {renderDairyProducts}
        
    </div>
  </div>
  </>
  )
}

export default Meat

const dairyProducts =[
    {
    id: 1,
    title: "Milk",
    category: "Dairy",
    price: "40",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/AI%20Emoji%20Generator.jpeg",
  },
  {
    id: 2,
    title: "Paneer",
    category: "Dairy",
    price: "50",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/Paneer%20Cheese%20Cubes%20On%20A%20Plate%20Transparent%20Background,%20Paneer,%20Cheese,%20Cubes%20PNG%20Transparent%20Image%20and%20Clipart%20for%20Free%20Download.jpeg",
  },
  {
    id: 3,
    title: "Cheese",

    category: "Dairy",
    price: "30",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/658d3afd-8cc4-432a-bd66-ff2fb44e2b62.jpeg",
  },
  {
    id: 4,
    title: "Butter",
    category: "Dairy",
    price: "57",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/b9e92e01-7f9c-44be-b321-8e397442a15e.jpeg",
  },
  {
    id: 5,
    title: "Yogurd",
    category: "Dairy",
    price: "87",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/WhatsApp%20Image%202025-10-31%20at%204.22.54%20PM%20(1).jpeg",
  },
  {
    id: 6,
    title: "Ghee",

    category: "Dairy",
    price: "55",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/WhatsApp%20Image%202025-10-31%20at%204.22.54%20PM%20(2).jpeg",
  },
  {
    id: 7,
    title: "Curd",
    category: "Dairy",
    price: "15",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/WhatsApp%20Image%202025-10-31%20at%204.22.54%20PM.jpeg",
  },
  {
    id: 8,
    title: "Egg",
    category: "Dairy",
    price: "32",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/dailry%20products/WhatsApp%20Image%202025-10-31%20at%204.22.55%20PM.jpeg",
  },
]