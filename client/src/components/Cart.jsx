import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { cartReset } from "../redux/actions/cartActions";
import CartItem from "../components/CartItem";
import CartTotal from "./CartTotal";
import { Button, Container, makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import Swal from 'sweetalert2'

const useStyle = makeStyles({
  cart: {
    marginLeft: "0px",
  },
  title: {
  color: '#f50057'
  }
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
  if(!cartItems) {
     Swal.fire({
      icon: 'warning',
      title: 'Carrito Vacio',
      showConfirmButton: false,
      timer: 1500,
      }); history.push('/products')
    
  }
  // let cartRender ;
  // if(cartItems){
  //   cartRender = cartItems.map((product) => (
  //     <CartItem product={product} />
  //   ))
  // } else {
  //   cartRender = (<div></div>)
  // }
  return (
    <div>
      <table>
        <th>
          <Container className={classes.cart}>
            <div>
              <h4 className={classes.title}>Mis Productos</h4>
            </div>
            <hr />
            <Container>
              <Container>
                {
                  cartItems?.map((product) => (
                    <CartItem product={product} />
                  )) 
                }
              </Container>
            </Container>
          </Container>
          <hr />
        </th>
        <th>
          <Container>
            <CartTotal />
          </Container>
        </th>
      </table>
    </div>
  );
};

export default Cart;
