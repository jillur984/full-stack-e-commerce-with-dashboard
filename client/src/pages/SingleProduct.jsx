import Container from '@/components/Container'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serverUrl } from '@/config'
import ProductInfo from '@/components/ProductInfo'

const SingleProduct = () => {

  const {id}=useParams()

 

  const[loading,setLoading]=useState(false)
  const [product,setProduct]=useState(null)

  console.log(id)

useEffect(()=>{
      try {
        setLoading(true)
        const fetchData=async()=>{
          const response=await axios.get(`${serverUrl}/api/product/single?id=${id}`);
          const data=response?.data
          console.log(data)
          if(data.success){
            setProduct(data?.product)
          
          }
          
          else{
            console.log("Product Fetching Error",error)
          }
        }
        fetchData()
      } catch (error) {
        console.log("New Arrival Product Fetch Errror",error.message)
      }
      finally{
        setLoading(false)
      }
  },[id])

  return (
    <Container className="">
      
      <div className='grid grid-cols-2 gap-6'>
        <div className='w-full max-w-[500px] group overflow-hidden rounded-md'>
   
        <img src={product?.images[0]} className='w-full h-full group-hover:scale-110 rounded-md'/>
      </div>

      <div>
       <ProductInfo product={product}/>
      </div>
      </div>
        
    </Container>
  )
}

export default SingleProduct