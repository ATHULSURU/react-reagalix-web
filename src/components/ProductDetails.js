import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = (props) => {
  let location = useLocation()
  const productData = location.state.ProductData
  debugger
  return (
    <div className='product-details-container'>
      <div className='product-name'>category: {productData.category}</div>
      <img
        src={productData.image}
        alt=''
        className='product-image-details'
      ></img>
      <div className='product-name'>Description: {productData.description}</div>
      <div className='product-name'>price: ${productData.price}</div>
      <div className='product-name'>title: {productData.title}</div>
      <button type='button' class='btn btn-primary'>
        Buy Now
      </button>
    </div>
  )
}

export default ProductDetails
