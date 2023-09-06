import React from 'react'
import Main from "../../components/main/Main";
import Service from '../../components/end_service/Service';
import Banner from '../../components/banner/Banner';
import Search from '../../components/serch/Serch';
import Aside from '../../components/saidbar/Saidbar';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Main/>
      <Service/>
    </div>
  )
}

export default Home