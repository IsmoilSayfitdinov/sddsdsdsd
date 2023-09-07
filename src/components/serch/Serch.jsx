import { useState, useEffect, } from "react";
import { instance } from '../../api/axios';
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Serch.scss";
import logo from "../../img/svg.svg";
import Aside from "../saidbar/Saidbar";
import { useTranslation } from "react-i18next";

const Search = (productsView) => {
  const {t} = useTranslation()
  const [inputSearch, setInputSearch] = useState("");
  const [searchResult, setSearchResults] = useState([]);
  const [isActive, SetActive] = useState(true)



  useEffect(() => {
    instance(`product/search/${inputSearch}`)
      .then(response => { 
        setSearchResults(response.data)
        setShowNoResult(response.data.length === 0 && inputSearch !== ""); 
      })
        
      .catch(err => {
        setSearchResults([])
      })
  }, [inputSearch])

  const [showNoResult, setShowNoResult] = useState(true);


  const hideNoResult = () => {
    setShowNoResult(false);
    setInputSearch("")
  };


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
                  showNoResult && inputSearch ? (
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
                          <div onClick={hideNoResult}>
                            Отмениты
                          </div>
                        </div>
                      </div>
                      <div className="images__group">
                        <img src="https://mold-2.vercel.app/static/media/resultno.66419f6a48c60be00243.png" className={'no-result-images'} alt="No results" />
                      </div>
                    </div>
                  ) : (
                    searchResult.length > 0 && (
                      <div className='search__result'>
                        <div className={'navbar__search__result results'}>
                          <div className="header__flex">
                            <div>Қидириш натижалари:</div>
                            <div className="Navbar_search__indicator">
                              #{inputSearch}
                            </div>
                          </div>
                          <div className="header__result">
                            <span>{searchResult.length}  Натижа {searchResult.length !== 1 ? " ": ''}</span>
                            <div onClick={hideNoResult}>
                              Бекор қилиш
                            </div>
                          </div>
                        </div>
                        {searchResult?.map(searchedItem =>
                          <Link className="search__result_link" to={`/product-view/${searchedItem._id}`}>
                            <div className={'search__result-item'}>
                              <img src={searchedItem?.productImages[0]} alt=""/>
                              <h4>{searchedItem?.productName_ru}</h4>
                              <strong>{`${searchedItem?.productSizesAndQuantity[0].price} ${searchedItem?.productSizesAndQuantity.length > 1 ? "-" + searchedItem?.productSizesAndQuantity.reverse()[0].price : ""} SUM`}</strong>
                            </div>
                          </Link>
                        )}
                      </div>
                    )
                  )
                }

              </div>
              <div className="sub_navigation">
                {isActive && <Aside />}
                <Link onClick={()=> SetActive(!false)}  className="sub__nav-link" to="/" >{t("Nav.main")}</Link>
                <Link onClick={()=> SetActive(!true)} className="sub__nav-link" to="/Parents">{t("Nav.partenorts")}</Link>
                <Link onClick={()=> SetActive(!true)}  className="sub__nav-link" to="/Aloqa">{t("Nav.Contact")}</Link>
                <Link onClick={()=> SetActive(!true)} className="sub__nav-link" to="/contact">{t("Nav.About")}</Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Search;