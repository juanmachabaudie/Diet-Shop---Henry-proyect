import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
<<<<<<< Updated upstream
import NewCategory from "./components/NewCategory";
import AddProduct from "./components/AddProduct";
import SearchProducts from './components/SearchProducts';
=======
import Catalogue from "./components/Catalogue";
import ProductDetail from "./components/ProductDetail";
>>>>>>> Stashed changes

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
<<<<<<< Updated upstream
      <Route exact path="/catalogue" component={Catalog} />
      <Route exact path="/addCategory" component={NewCategory} />
      <Route exact path="/addProduct" component={AddProduct} />
=======
      <Route exact path="/catalogue" component={Catalogue} />
      <Route path="/product/detail" component={ProductDetail} />
>>>>>>> Stashed changes
      <Route path="/" component={Footer} />
    </React.Fragment>
  );
};

export default App;
