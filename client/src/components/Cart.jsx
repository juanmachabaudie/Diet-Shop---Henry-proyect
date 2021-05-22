import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCartReload } from '../redux/actions/cartActions.js'
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";

import { Container, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  cart: {
    marginLeft: "0px",
  },
  title: {
    color: "gray",
  },
});

const Cart = () => {
  
  const classes = useStyle();
  const dispatch = useDispatch();
  const cartInLocal = localStorage.getItem("cart");
  // Parse JSON string to object
  const cartItems = JSON.parse(cartInLocal);
  
  useEffect(() => {
    dispatch (setCartReload())
  }, [dispatch])
  
  //esto va a mostrar todos los productos que tiene un usuario en su carrito//y mostraremos los items cart y el total cart
  return (
    <Container className={classes.cart}>
      <div>
        <h4 className={classes.title}>Mis Productos</h4>
      </div>{" "}
      <hr />
      <Container>
        <Container>
          {cartItems.map((product) => (
            <CartItem product={product} />
          ))}
        </Container>
      </Container>
      <hr />
      <CartTotal cartItems={cartItems}/>
    </Container>
   
  );
};

export default Cart;
