import React from "react";
import { Route } from "react-router-dom";
import AddCategory from "./components/AddCategory";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/detail" component={ProductDetail} />
      <Route exact path="/category/add" component={AddCategory} />
    </React.Fragment>
  );
};

export default App;
