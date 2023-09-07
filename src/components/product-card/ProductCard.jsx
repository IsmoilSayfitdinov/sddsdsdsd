import {React  } from 'react';
import { DefaultButton } from '../../utils/Utils';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import "./ProductCard.scss"
import Mn from '../../routes/maincategory/Mn';


const ProductCard = ({productData}) => {

  console.log(productData);
  
  return (
   <div className='product-card'>
      <Link to={`/product-view/${productData._id}`}>
        <img src={productData.productImages[0]} alt="" />
      </Link>
      <h3>{productData.productName_uz}</h3>
      <div className='product-card__categories'>
        <span>{productData.productMainCategory_ru}</span> <FiChevronRight/> <span>{productData.productSubCategory_ru}</span>  
      </div>
      <div className='product-card__price'>
        {`${productData?.productSizesAndQuantity[0].price} ${productData?.productSizesAndQuantity.length > 1 ? "- " + productData?.productSizesAndQuantity.reverse()[0].price : ""} CУМ ` }
      </div>
      <DefaultButton text="Саватга қўшиш"/>
      <Mn productId={productData}/>
    </div>

  )
}

export default ProductCard