import Container from '@/components/Container'
import PaginationProductList from '@/components/PaginationProductList'
import ProductSideNav from '@/components/ProductSideNav'
import Title from '@/components/Title'
import React from 'react'

const Shop = () => {
  return (
    <Container>
      <Title>All Proudct See Here</Title>
      <div className='flex gap-5'>
        <div className='w-[25%] hidden md:inline-flex'><ProductSideNav/></div>
        <div className='w-full'>
          <PaginationProductList/>
        </div>
      </div>
    </Container>
  )
}

export default Shop