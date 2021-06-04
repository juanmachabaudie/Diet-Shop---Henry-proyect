import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartReload, deleteCart } from "../redux/actions/cartActions.js";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  cart: {
    marginLeft: "0px",
  },
  title: {
    color: "gray",
  },
  container: {
    display: "flex",
  },
}));
  
const Cart = () => {

  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const cartItems = useSelector((state) => state.cart.cartItems);
  useEffect(() => {
    dispatch(setCartReload());
  }, [dispatch]);

  const deleteAllCart = () => {
    dispatch(deleteCart())
    Swal.fire({
      icon: 'error',
      title: 'Carrito Vacio',
      showConfirmButton: false,
      timer: 1500,
      }); 
      history.push('/products') 
  }

  return (
    <Container className={classes.cart}>
      <div className={classes.offset}/>
        <Container>
          <div>
            <h4 className={classes.title}>Mis Productos</h4>
          </div>
          <hr />
          <Container className={classes.container}>
            <Container>
              {cartItems.map((product) => (
                <CartItem key={product.uuid} product={product} />
              ))}
            </Container>
            <CartTotal cartItems={cartItems} />
          </Container>
          <hr />
        </Container>
        <Button variant='contained' color='primary' onClick={deleteAllCart}>VACIAR CARRITO</Button>
    </Container>
  );
};

export default Cart;
