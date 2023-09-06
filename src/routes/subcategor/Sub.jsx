import React from 'react'
import "./Sub.scss"
import { useParams } from 'react-router-dom'

const Sub = () => {

  let idSubCategory =  useParams()

  console.log(idSubCategory);
  return (
    <div>sub</div>
  )
}

export default Sub