const express=require('express')
const app=express();
const axios = require('axios')
const cors=require('cors')


app.use(express.json());
app.use(cors())

app.get('/',async (req,res)=>{
  const productList= await axios.get('https://dummyjson.com/products');
  const cart= await productList.data;
  res.json(cart);
})









app.listen(3000,()=>{
  console.log('server started')
})