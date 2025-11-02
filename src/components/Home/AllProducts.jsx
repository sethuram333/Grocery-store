import React from 'react'

import product from '../productList/productList'
import Card from '../cards/Card'
import Banner from '../Banner/Banner'


const AllProducts = () => {

    const renderAllProducts = product.map((item)=>{
        return(
            <Card image={item.image} title={item.title} price={item.price}/>
        )
    })

  return (
  <>
  <div className='2xl:container mx-auto mt-25'>
    
   <Banner title="All Products" bgImage="https://ik.imagekit.io/sy9qynug0/grocery%20html,css,js/WhatsApp%20Image%202025-11-02%20at%2012.38.46%20PM.jpeg"/>

    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-2 bg-[#EEE] shadow-xl mt-15'>
     {renderAllProducts}
        
    </div>
  </div>
  </>
  )
}

export default AllProducts
