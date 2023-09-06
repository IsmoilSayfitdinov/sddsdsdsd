import { useState, useEffect } from "react";
import "./Serch.scss";
import logo from "../../img/svg.svg";
import Aside from "../saidbar/Saidbar";
import { FiSearch } from "react-icons/fi";
import { instance } from '../../api/axios';
import { Link } from "react-router-dom";

const Search = (productsView) => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isActive, SetActive] = useState(true)
  const [errroSerch, setErorr] = useState(true)

  useEffect(() => {
    instance(`product/search/${inputSearch}`)
      .then(response =>{ 
        setSearchResults(response.data)
        setErorr(response.data.length === 0 && inputSearch !== "")
      })
      .catch(err => {
        setSearchResults([])
        setErorr(true)
        console.log(err);
      })
  }, [inputSearch])


const hideResult = () =>{
   setErorr(false)
   setInputSearch("")
}

  return (
    <div>
      <div className="search_wrapper">
          <div className="search">
            <img className="logo" src={logo} alt="" />
            <div className="search__group">
              <div className="input_wrapper">
                <input type="text" placeholder="Поиск..." value={inputSearch} onChange={e => setInputSearch(e.target.value)}/>
                <button>
                  <FiSearch/>
                </button>
                    
                  {
                    errroSerch && inputSearch ? (
                      <div className='no-result'>
                      <div className={'navbar__search__result'}>
                        <div className="header__flex">
                          <div>Қидириш натижалари:</div>
                          <div className="Navbar_search__indicator">
                            #{inputSearch}
                          </div>
                        </div>
                        <div className="header__result">
                          <span>0 Натижа</span>
                          <div onClick={hideResult}>
                            Бекор қилиш
                          </div>
                        </div>
                      </div>
                      <div className="images__group">
                        <img src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/no-results.66419f6a48c60be00243.png" className={'no-result-images'} alt="No results" />
                      </div>
                    </div>
                    )  :   searchResults.length > 0 && (
                      <div className='search__result'>
                        <div className={'navbar__search__result results'}>
                          <div className="header__flex">
                            <div>Қидириш натижалари:</div>
                            <div className="Navbar_search__indicator">
                              #{inputSearch}
                            </div>
                          </div>
                          <div className="header__result">
                            <span>{searchResults.length}  Натижа {searchResults.length !== 1 ? " ": ''}</span>
                            <div onClick={hideResult}>
                              Бекор қилиш
                            </div>
                          </div>
                        </div>
                        {searchResults?.map(searchedItem =>
                          <Link className="search__result_link" to={`/productdetails/${searchedItem._id}`}>
                            <div className={'search__result-item'}>
                              <img src={searchedItem?.productImages[0]} alt=""/>
                              <h4>{searchedItem?.productName_ru}</h4>
                              <strong>{`${searchedItem?.productSizesAndQuantity[0].price} ${searchedItem?.productSizesAndQuantity.length > 1 ? "-" + searchedItem?.productSizesAndQuantity.reverse()[0].price : ""} SUM`}</strong>
                            </div>
                          </Link>
                        )}
                      </div>
                    )
                  
                  }
              </div>
              <div className="sub_navigation">
                {isActive && <Aside />}
                <Link onClick={()=> SetActive(!false)}  className="sub__nav-link" to="/" >Главная</Link>
                <Link onClick={()=> SetActive(!true)} className="sub__nav-link" to="/Parents">Партнеры</Link>
                <Link onClick={()=> SetActive(!true)}  className="sub__nav-link" to="/Aloqa">О нас</Link>
                <Link onClick={()=> SetActive(!true)} className="sub__nav-link" to="/contact">Контакт</Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Search;