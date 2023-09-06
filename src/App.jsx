import {Routes, Route} from "react-router-dom";
import Contact from "./routes/contact/Contact";
import Home from "./routes/home/Home";
import Nav from "./components/nav/Nav";
import Serch from "./components/serch/Serch";
import End from "./components/end/End";
import Parents from "./routes/Parents/Parents";
import Aloqa from "./routes/aloqa/Aloqa"
import ProductView from "./routes/product-view/ProductView";
import Mn from "./routes/maincategory/Mn";
import Sub from "./routes/subcategor/Sub";

function App() {
  return (
    <div className="container">
      <Nav/>
      <Serch />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Parents" element={<Parents/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path='/Aloqa' element={<Aloqa/>}/>
        <Route path='/product-view/:id' element={<ProductView/>}/>
        <Route path='/maincategory/:id' element={<Mn/>}/>
        <Route path="/subcategory/:id" element={<Sub/>}/>
      </Routes>
      <End/>
    </div>
  );
}

export default App;