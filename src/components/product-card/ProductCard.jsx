import React from 'react';
import { DefaultButton } from '../../utils/Utils';
import "./ProductCard.scss";

const ProductCard = ({productData}) => {
  return (
    <div className='product-card'>
      <img src={productData.productImages[0]} alt="" />
      <h3>{productData.productName_uz.slice(0,15)}</h3>
      <DefaultButton text="Саватга қўшиш"/>
    </div>
  )
}

export default ProductCard