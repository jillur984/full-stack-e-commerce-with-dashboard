import Container from '@/components/Container'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serverUrl } from '@/config'

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
  },[])

  return (
    <Container>
      
      <h1>Single Product</h1>
        
    </Container>
  )
}

export default SingleProduct