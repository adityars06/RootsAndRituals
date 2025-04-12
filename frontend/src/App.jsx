import { useState ,useEffect} from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import ListingPage from './components/ListingPage'
import { productfetch } from './api/cart'

function App() {
  const [products,setProducts]= useState([])
  const [filteredList,setFilteredList]= useState([]);
  const [value,setValue]=useState("");

  useEffect(()=>{
    productfetch().then((res)=>{setProducts(res)
       setFilteredList(res)})
  },[])

  

  return (
    <div>
     <SearchBar products={products} filteredList={filteredList} setFilteredList={setFilteredList} value={value} setValue={setValue} />
     <ListingPage filteredList={filteredList} products={products} />
    </div>
  )
}

export default App
