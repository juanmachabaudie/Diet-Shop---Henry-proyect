import React from "react";
import { useDispatch } from "react-redux";
import { Container, Typography, Button } from "@material-ui/core";
import {goToCheckout} from "../redux/actions/cartActions";
import {decodeToken} from '../helpers/utils.jsx';

export const CartTotal = ({cartItems}) => {
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const userEmail = decodeToken();
  const handleGoToCheckout = () => dispatch(goToCheckout(userEmail)); //revisar esto

  return (
    <Container>
      <Typography> Total: ${`${total}`}</Typography>
      <Button onClick={handleGoToCheckout} >Comprar</Button>
    </Container>
  );
};

export default CartTotal;
