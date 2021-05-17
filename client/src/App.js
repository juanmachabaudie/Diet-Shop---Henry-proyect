import React from "react";
import { Route } from "react-router-dom";
import AddCategory from "./components/AddCategory";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct.jsx";
import SearchProduct from "./components/SearchProduct.jsx";
import AddUser from "./components/AddUser.jsx";
import Cart from "./components/Cart.jsx";
import CartTotal from './components/CartTotal'
import CartItem from "./components/CartItem";
import { Container } from "@material-ui/core";
import {makeStyles} from '@material-ui/styles'

const useStyle = makeStyles({
  cart: {
    display: "flex",
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'space-around'
  }
});

const App = () => {
  const classes = useStyle()
  return (
    <React.Fragment>
      <Route path="/" component={NavBar} />
      <Route exact path="/products" component={Products} />
      <Route path="/product/detail" component={ProductDetail} />
      <Route exact path="/category/add" component={AddCategory} />
      <Route exact path="/product/add" component={AddProduct} />
      <Route path="/products/search" component={SearchProduct} />
      <Route exact path="/user/add" component={AddUser} />
      <Container className={classes.cart}>
      <Route exact path="/cart" component={Cart}  />
      <Route exact path="/cart" component={CartTotal}  />
      </Container>
      
      
    </React.Fragment>
  );
};

export default App;
