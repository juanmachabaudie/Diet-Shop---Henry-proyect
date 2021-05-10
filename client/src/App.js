import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Catalogue from "./components/Catalogue";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route path="/product/detail/" component={ProductDetail} />
      <Route path="/" component={Footer} />
    </React.Fragment>
  );
};

export default App;
