import React from 'react'
import Title from './Title'
import PriceContainer from './PriceContainer'
import AddToCart from './AddToCart'

const ProductInfo = ({ product }) => {
  return (
    <div className="space-y-5 p-4 rounded-lg border border-gray-200 shadow-sm bg-white">
      
      {/* Product Title */}
      <Title>
        <span className="text-gray-900">{product?.name}</span>
      </Title>

      {/* Price */}
      <div className="pt-1">
        <PriceContainer item={product} />
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
        {product?.description}
      </p>

      {/* Review placeholder */}
      <p className="text-sm text-gray-500 italic">
        Be the first to leave a review.
      </p>

      {/* Category & Brand */}
      <div className="space-y-1 text-sm pt-2">
        <p>
          <span className="font-semibold text-gray-800">Category:</span>{" "}
          {product?.category}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Brand:</span>{" "}
          {product?.brand}
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className="pt-4">
        <AddToCart item={product} />
      </div>

    </div>
  )
}

export default ProductInfo
