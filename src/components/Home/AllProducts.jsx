import React from 'react'

import product from '../productList/productList'
import Card from '../cards/Card'


const AllProducts = () => {

    const renderAllProducts = product.map((item)=>{
        return(
            <Card image={item.image} title={item.title} price={item.price}/>
        )
    })

  return (
  <>
  <div className='2xl:container mx-auto mt-25'>
    
    <div className='w-[90%] mx-auto bg-amber-300 '>
     <h1 className='text-3xl font-[poppins] text-center py-5 '>All Products</h1>
    </div>

    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-15 px-2 bg-[#EEE] shadow-xl'>
     {renderAllProducts}
        
    </div>
  </div>
  </>
  )
}

export default AllProducts
