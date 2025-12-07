import { serverUrl } from '@/config'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Title from './Title'
import Slider from "react-slick"
import Product from '@/pages/Product'
import NextArrow from './NextArrow'
import PreviousArrow from './PreviousArrow'



const NewArrival = () => {

  const[products,setProducts]=useState([])
  const [loading,setLoading]=useState(false)
  const[total,setTotal]=useState(null)

  useEffect(()=>{
      try {
        setLoading(true)
        const fetchData=async()=>{
          const response=await axios.get(serverUrl + "/api/product/list")
          const data=response?.data

          if(data.success){
            setProducts(data?.products)
            setTotal(data?.total)
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



    const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PreviousArrow/>,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };



  return (
    <div>
      <div className='py-7 '>
        <Title>New Arrivals</Title>
        <Slider {...settings} className=''>
          {
            products.map((item)=> (
                <Product key={item._id} productData={item}/>
              )
            )
          }
        </Slider>
      </div>
    </div>
  )
}

export default NewArrival