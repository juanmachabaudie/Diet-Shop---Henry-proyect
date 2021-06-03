import React from "react";
import { Container, Typography, Button, Card } from "@material-ui/core";
import makeStyles from './componentsStyles/CartTotalStyles';

export const CartTotal = ({ cartItems }) => {

  const classes = makeStyles()

  const total = cartItems.reduce((acc, product) => acc + product.price * product.quantity,0);

  return (
    <Container>
    <Card className={classes.card}>
      <Typography variant="div" className={classes.title} color="secondary">SUBTOTAL</Typography> <hr/>
      <Typography variant='h4' className={classes.title}> ${total}</Typography> 
      <Button variant='contained' color='primary' className={classes.button} href="/checkout/info">Comprar</Button>
    </Card>
  </Container>
  );
};

export default CartTotal;
