import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import jwt from 'jsonwebtoken';

export const CartTotal = ({cartItems}) => {
  const total = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <Container>
      <Typography> Total: ${`${total}`}</Typography>
      <Button href='/checkout/info' >Comprar</Button>
    </Container>
  );
};

export default CartTotal;
