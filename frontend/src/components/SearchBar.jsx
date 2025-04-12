import React, { use, useMemo, useState } from "react"


function SearchBar({products,filteredList,setFilteredList,value,setValue}){
  
  const filterResult= useMemo(()=>{
    return products.filter(product=>product.title.includes(value))
  },[value,products])
  setFilteredList(filterResult)

  return(
  <div>
    <input placeholder="Search title" onChange={(e)=>setValue(capitaliseWords(e.target.value))}></input>
    
  </div>
  )
  
  
}

function capitaliseWords(sentence){
 return sentence.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}

const hello= capitaliseWords("you are looking good")
console.log(hello)




export default  SearchBar

