import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import NewCategory from "./components/NewCategory";
import AddProduct from "./components/AddProduct";
import SearchProducts from './components/SearchProducts';
import FilterByCategory from './components/FilterByCategory'
import Product from "./components/Product";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route path='/search/:name' component={SearchProducts}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Catalog} />
      <Route exact path="/detail/:productId" component={Product} />
      <Route exact path="/addCategory" component={NewCategory} />
      <Route path="/" component={Footer} />
      <Route exact path='/addProduct' component={AddProduct}/>
      <Route path='/catalogue/category' component={FilterByCategory}/>
    </React.Fragment>
  );
};

export default App;
