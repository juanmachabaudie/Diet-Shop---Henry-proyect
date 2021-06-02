import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { goToCheckout } from "../redux/actions/cartActions";
import { decodeToken } from "../helpers/utils.jsx";

export const CartTotal = ({ cartItems }) => {
  const total = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const userEmail = decodeToken();

  return (
    <Container>
      <Typography> Total: ${`${total}`}</Typography>
      <Button href="/checkout/info">Comprar</Button>
    </Container>
  );
};

export default CartTotal;
