import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { instance } from '../../api/axios'
import {FiChevronRight} from "react-icons/fi"
import {TbHandClick} from "react-icons/tb"
import "./Mn.scss"

const Mn = (productData) => {
    
    let idItems = useParams()

    const [ isItems , setItems] = useState([]);

    useEffect(()=>{
        instance(`/category/categories/${idItems.id}`)
        .then(responsea => setItems(responsea.data?.maincategory))
        .catch(err => console.log(err))


    },[idItems.id])




     
    return (
        <>
        <div className='itemsProduct'>
             <div className='main-category'>
             <h1>{isItems?.productMainCategory_ru}</h1>
              <div className='main_product'>
                  <div className='products'> 
                 {
                    isItems?.map(i=>(
                       <div className='product__mainCtegory-items'>
                         <div className='product__mainCategory-img'>
                             <Link to={`/product-view/${productData._id}`}>
                                <img style={{width:"250px", height:"230px"}} src={i?.productImages?.at(0)} alt="" />
                             </Link>
                             <h2 className='product__maincatgery-name'>{i.productName_ru}</h2>
                             <div className='categorys'>
                                <div className='product__maincategry-mainCategoryTitle'>{i?.productMainCategory_ru}</div>
                                <FiChevronRight className='cursore'/>
                                <div className='product__maincategory-SubCategory'>{i?.productSubCategory_ru}</div>
                             </div>
                             <div className='product__quantiy-price'>
                                <h2> {`${i?.productSizesAndQuantity[0].price} СУМ ${i?.productSizesAndQuantity.length > 1 ? "- " + i?.productSizesAndQuantity.reverse()[0].price : ""} CУМ ` }</h2>
                             </div>
                             <Link className='link__btn' to={`/product-view/${productData._id}`}>
                                 <button><TbHandClick className='clickHand'/> Выбор </button>
                              </Link>
                         </div>
                       </div>
                    ))
                 }
             
               </div>
            </div>
             </div>
      </div>
      </>
    )
}

export default Mn