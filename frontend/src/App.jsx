import { useState ,useEffect,lazy} from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useNavigation } from 'react-router-dom'
import './App.css'
import SearchBar from './components/SearchBar'
const ListingPage= lazy(()=>import('./components/ListingPage')) 
import { productfetch } from './api/cart'
const Cart = lazy(()=>import('./components/Cart')) 
import React from 'react'

function App() {
  const [products,setProducts]= useState([])
  const [filteredList,setFilteredList]= useState([]);
  const [value,setValue]=useState("");

  useEffect(()=>{
    productfetch().then((res)=>{
      setProducts(res)
       setFilteredList(res)
    })
  },[])

  

  return (
    <div>
    <BrowserRouter>
    <AppBar/>
    <SearchBar products={products} filteredList={filteredList} setFilteredList={setFilteredList} value={value} setValue={setValue} />
      <Routes>
        <Route path='/' element={<ListingPage filteredList={filteredList} products={products} />} />
        <Route path='/cart' element={<Cart/>} />
        
        
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

function AppBar(){
  const navigate = useNavigate()
  return(
    <div style={{border:"2px solid black"}}>
      <button onClick={()=>navigate('/')}>ListingPage</button>
      <button onClick={()=>navigate('/cart')}>Cart</button>
    </div>
  )
}

export default App
