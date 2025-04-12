import React, { memo, useEffect, useState } from 'react'
import { productfetch } from '../api/cart'

const ListingPage = memo(({filteredList, products})=> {
  
  
  return (
    <div>
      {filteredList.length===0 && products.length===0?(
        <p>Loading products...</p>
      ):(
        filteredList.length===0?(
          <div>No product matches your search</div>
        ):(
          <div>{filteredList.map((product)=>(
            <p>{product.title}</p>
          ))}</div>
        )
      )
      
      }
    </div>
  )
})

export default ListingPage
