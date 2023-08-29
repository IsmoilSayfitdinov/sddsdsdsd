import React from 'react'
import "./Serch.scss"
import imgLogo from "../../img/svg.svg"
import {BiSearch} from "react-icons/bi"
import { NavLink } from 'react-router-dom'

const Serch = () => {
  return (
    <div className='Serch'>
        <img className='serch_logo' src={imgLogo} alt="" /> 
         <form action="">
            <input className='serch_inp' type="text" placeholder='Қидириш'/> 
            <button type='summbit'><BiSearch></BiSearch></button>
         </form>
         <ul>
           <li><NavLink to="/">Бош сахифа</NavLink></li>
           <li><NavLink to="/Parents">Ҳамкорлар</NavLink></li>
           <li><NavLink to="/Contact">Биз ҳақимизда</NavLink></li>
           <li><NavLink to="/Aloqa">Алоқа</NavLink></li>
         </ul>
    </div>
  )
}

export default Serch