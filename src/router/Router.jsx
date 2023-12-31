import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from '../components/layout/MainLayout'
import HomePage from '../Pages/Home/Home'
import Product from "../Pages/Product/Product"
import Store from "../Pages/Store/Store"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import ProductKulah from "../Pages/Product/components/childPages/kulah"
import ProductTabak from "../Pages/Product/components/childPages/tabak"

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route path="" element={<HomePage/>}/>
            <Route path="product" element={<Product/>}>
              <Route path="kulah" element={<ProductKulah/>}/> 
              <Route path="tabak" element={<ProductTabak/>}/>  
            </Route>
            <Route path="store" element={<Store/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers