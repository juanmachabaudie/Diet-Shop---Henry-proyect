import React from "react";
import { Route } from "react-router-dom";
import AddCategory from "./components/AddCategory";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct.jsx"
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct.jsx";
import SearchProduct from "./components/SearchProduct.jsx";
import AddUser from "./components/AddUser.jsx";


const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/products" component={Products} />
      <Route path="/product/detail" component={ProductDetail} />
      <Route exact path="/category/add" component={AddCategory} />
      <Route exact path="/product/add" component={AddProduct}/> 
      <Route exact path="/cart" component={Cart}/> 
      <Route path="/products/search" component={SearchProduct}/>
      <Route exact path="/user/add" component={AddUser} />
    </React.Fragment>
  );
};

export default App;
