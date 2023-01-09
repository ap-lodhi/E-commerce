import React from "react";

import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import { Home } from "./pages/Home";
import {About } from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
const App = () => {
  return (
    <Router>

      <Routes>
        <Route   path="/" element={<Home/>}></Route>
        <Route   path="/about" element={<About/>}></Route>
        <Route   path="/products" element={<Products/>}></Route>
        <Route   path="/contact" element={<Contact/>}></Route>
        <Route   path="/singleproduct/:id" element={<SingleProduct/>}></Route>
        <Route   path="/cart" element={<Cart/>}></Route>

      </Routes>
    </Router>
  )
};

export default App;
