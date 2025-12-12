import React, { useEffect, useState } from 'react'
import ProductBanner from './ProductBanner'
import Pagination from './Pagination'
import { serverUrl } from '@/config'
import axios from 'axios'

const PaginationProductList = () => {
    const[products,setProducts]=useState([])
    const[loading,setLoading]=useState(false)
    const[itemsPerPage,setItemsPerPage]=useState(3)


    const itemsPerPageFormBanner =(itemsPerPage)=>{
        setItemsPerPage(itemsPerPage)

        console.log("Values",itemsPerPage)
    }
    
  useEffect(()=>{
      try {
        setLoading(true)
        const fetchData=async()=>{
          const response=await axios.get(serverUrl + "/api/product/list")
          const data=response?.data

          if(data.success){
            setProducts(data?.products)
            
          }
          else{
            console.log("Product Fetching Error",error)
          }
        }
        fetchData()
      } catch (error) {
        console.log("Error",error.message)
      }
      finally{
        setLoading(false)
      }
  },[])
  return (
    <div className='flex flex-col gap-5 w-full'>
        <ProductBanner  itemsPerPageFormBanner={itemsPerPageFormBanner}/>
        <Pagination itemsPerPage={itemsPerPage} products={products}/>
    </div>
  )
}

export default PaginationProductList