import React, { useEffect, useState } from 'react'
import { instance } from '../../api/axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {TbHandClick} from "react-icons/tb"
import { FiChevronRight } from 'react-icons/fi'
import "./Sub.scss"
import Service from '../../components/end_service/Service'


const Sub = () => {

  const idIdItemsCategoryURL = useParams() 
  const [isItemsProducts , setItemsProduct] = useState([])
  
  useEffect(()=>{
    instance(`/category/subcategories/${idIdItemsCategoryURL.id}`)
    .then(respone => setItemsProduct(respone.data))
    .catch(err => console.log(err))
  }, [idIdItemsCategoryURL.id])

  console.log(isItemsProducts);

  return (
    <>
    <div className='itemsProductSubCategory'>
         <div className='Sub-category'>
         <h1 className='subName'>{isItemsProducts?.subCategoryTranslate?.ru}</h1>
          <div className='Sub_product'>
              <div className='Sub__products'> 
             {
                isItemsProducts?.subCategory?.map(i =>(
                   <div className='product__subCtegory-items'>
                     <div className='product__subCategory-img'>
                         <Link to={`/product-view/${i?._id}`}>
                            <img style={{width:"250px", height:"230px"}} src={i?.productImages?.at(0)} alt="" />
                         </Link>
                         <h2 className='product__subcatgery-name'>{i?.productName_ru}</h2>
                         <div className='categorys'>
                            <div className='product__subcategry-subCategoryTitle'>{i?.productMainCategory_ru}</div>
                            <FiChevronRight className='cursore'/>
                            <div className='product__subcategory-SubCategory'>{i?.productSubCategory_ru}</div>
                         </div>
                         <div className='productSub__quantiy-price'>
                            <h2> {`${i?.productSizesAndQuantity[0].price} СУМ ${i?.productSizesAndQuantity.length > 1 ? "- " + i?.productSizesAndQuantity.reverse()[0].price : ""} CУМ ` }</h2>
                         </div>
                         <Link className='link__btn' to={`/product-view/${i?._id}`}>
                             <button><TbHandClick className='clickHand'/> Выбор </button>
                          </Link>
                     </div>
                   </div>
                ))
             }
         
           </div>
        </div>
        <Service/>
         </div>
  </div>
  </>
  )
}

export default Sub