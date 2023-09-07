import React, { useState } from 'react'
import "./Nav.scss"
import { BsTelephone } from "react-icons/bs";
import{ HiOutlineMail } from "react-icons/hi"
import  i18n  from "../../language/i18next";
import { useTranslation } from 'react-i18next';


const Nav = () => {
   
  const {t} = useTranslation()
  const [isLang , setLang] = useState("uz")

   function changeLang(selectedLangCode){
    i18n.changeLanguage(selectedLangCode)
    setLang(selectedLangCode)
   }

  return (
   <nav>
      <div className="main_nav">  
           <div className="img_flag">
               <img className='rus' style={isLang === "uz" ? {borderBottom:" 4px solid dodgerblue", paddingBottom:"2px"} : null}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/2560px-Flag_of_Uzbekistan.svg.png" alt=""   onClick={()=> changeLang("uz")}/>
               <img className='rus' style={isLang === "ru" ? {borderBottom:" 4px solid dodgerblue", paddingBottom:"2px"} : null} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt=""  onClick={()=> changeLang("ru")} />
               <a href="+998977042553">
                   <BsTelephone></BsTelephone> +998977042553
               </a>
             <a href="ismoilsayfitdinov@gmail.com" className='a'>  <HiOutlineMail className='icon_email'></HiOutlineMail> ismoilsayfitdinov@gmail.com</a>
           </div>
      </div>
   </nav>
  )
}

export default Nav