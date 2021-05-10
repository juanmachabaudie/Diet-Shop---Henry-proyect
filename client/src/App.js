import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import NavBar from "./components/NavBar";
import NewCategory from "./components/NewCategory";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/catalogue" component={Catalog} />
      <Route exact path="/addCategory" component={NewCategory} />
      <Route exact path="/addProduct" component={AddProduct} />
      <Route path="/" component={Footer} />
    </React.Fragment>
  );
};

export default App;
