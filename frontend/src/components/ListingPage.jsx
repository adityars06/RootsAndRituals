import React, { useEffect, useState } from 'react'
import { productfetch } from '../api/cart'

function ListingPage({filteredList, products}) {
  
  
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
}

export default ListingPage
