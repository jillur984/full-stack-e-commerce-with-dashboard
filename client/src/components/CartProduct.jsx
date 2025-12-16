import React from 'react'

const CartProduct = ({item}) => {
  return (
    <div>{item?.price}</div>
  )
}

export default CartProduct