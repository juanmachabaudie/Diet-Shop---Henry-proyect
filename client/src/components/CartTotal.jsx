import React from "react";
import { useDispatch } from "react-redux";
import { Container, Typography, Button } from "@material-ui/core";
import {goToCheckout} from "../redux/actions/cartActions";
import jwt from 'jsonwebtoken';

export const CartTotal = ({cartItems}) => {
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);
  let userEmail;
  if(sessionStorage.getItem("user")){
  let tokeen;
  const token = sessionStorage.getItem("user");
  if (token[0] === '"'){
    tokeen = JSON.parse(token);
  } else {
    tokeen = token;
  }
  userEmail = jwt.decode(tokeen).email;
}
  // const handleGoToCheckout = () => dispatch(goToCheckout(userEmail));

  return (
    <Container>
      <Typography> Total: ${`${total}`}</Typography>
      <Button href='/checkout/info' >Comprar</Button>
      {/* <Button onClick={handleGoToCheckout} >Comprar</Button> */}
    </Container>
  );
};

export default CartTotal;
