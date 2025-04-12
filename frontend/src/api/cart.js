import axios from 'axios'


export const productfetch=async()=>{
  const products= await axios.get('http://localhost:3000');
  return products.data.products
}