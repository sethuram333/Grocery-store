import React from 'react'
import Card from "../../components/cards/Card";

const Meat = () => {
    const renderMeat = meatproduct.map((item)=>{
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
     {renderMeat}
        
    </div>
  </div>
  </>
  )
}

export default Meat

const meatproduct = [
    {
    id: 1,
    title: "Chicken",
    category: "Meat",
    price: "120",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/Raw%20chicken%20fillets%20close%20up%20isolated%20without_.jpeg",
  },
  {
    id: 2,
    title: "Beaf",
    category: "Meat",
    price: "250",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meat.jpg?updatedAt=1759396791927",
  },
  {
    id: 3,
    title: "Mutton",
    category: "Meat",
    price: "700",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%205.25.33%20PM.jpeg",
  },
  {
    id: 4,
    title: "Fish",
    category: "Meat",
    price: "100",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%205.25.33%20PM%20(1).jpeg",
  },
  {
    id: 5,
    title: "Rabbit Meat",

    category: "Meat",
    price: "120",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%204.03.29%20PM.jpeg",
  },
  {
    id: 6,
    title: "Squid",
    category: "Meat",
    price: "240",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%204.03.29%20PM%20(1).jpeg",
  },
  {
    id: 7,
    title: "Crab",
    category: "Meat",
    price: "200",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%204.03.30%20PM%20(1).jpeg",
  },
  {
    id: 8,
    title: "Prawn",
    category: "Meat",
    price: "150",
    image:
      "https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/products/meats/WhatsApp%20Image%202025-10-31%20at%204.03.30%20PM.jpeg",
  },

]