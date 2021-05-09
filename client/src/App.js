import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import NewCategory from "./components/NewCategory";
import AddProduct from './components/AddProduct'
import Catalog from './components/Catalog';
import NavBar from './components/NavBar';
import NewCategory from './components/NewCategory';
import SearchProducts from './components/SearchProducts';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/catalogue" component={Catalog} />
      <Route exact path="/addCategory" component={NewCategory} />
    <Route exact path='/addProduct' component={AddProduct}/>
    </React.Fragment>
  );
};

export default App;
