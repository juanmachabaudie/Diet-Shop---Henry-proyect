import React from "react";
import { Route } from "react-router-dom";
import AddCategory from "./components/AddCategory";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts.jsx";
import SearchProduct from "./components/SearchProduct.jsx";
import AddUser from "./components/AddUser.jsx";
import Cart from "./components/Cart.jsx";
import CartTotal from "./components/CartTotal.jsx";
import Home from "./components/Home.jsx";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/product/detail" component={ProductDetail} />
      <Route exact path="/category/add" component={AddCategory} />
      <Route exact path="/product/add" component={AddProducts} />
      <Route path="/products/search" component={SearchProduct} />
      <Route exact path="/user/add" component={AddUser} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/cart" component={CartTotal} />
    </React.Fragment>
  );
};

export default App;
