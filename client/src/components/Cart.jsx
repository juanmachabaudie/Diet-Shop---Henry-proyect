import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartReset } from "../redux/actions/cartActions";
import CartItem from "../components/CartItem";
import { Button, Container, makeStyles } from "@material-ui/core";


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
  const history = useHistory();
  const handleEmptyCart = () =>
    dispatch(
      cartReset(),
      history.push("/"),
      history.push("/cart"),
      window.scrollTo(0, 0)
    );

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
      <Button variant="contained" onClick={handleEmptyCart}>
        Vaciar Carrito
      </Button>
      <Container></Container>
    </Container>
  );
};

export default Cart;
