import React from "react";
import { useDispatch } from "react-redux";
import { Container, Typography, Button, Card} from "@material-ui/core";
import {goToCheckout} from "../redux/actions/cartActions";
import makeStyles from './componentsStyles/CartTotalStyles'

export const CartTotal = ({cartItems}) => {
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const classes = makeStyles()

  const handleGoToCheckout = () => dispatch(goToCheckout());
  
  return (
    <Container>
    <Card className={classes.card}>
      <Typography variant="div" className={classes.title} color="secondary">SUBTOTAL</Typography> <hr/>
      <Typography variant='h4' className={classes.title}> ${total}</Typography> 
      <Button variant='contained' color='primary' className={classes.button} onClick={handleGoToCheckout}>Finalizar compra</Button>
    </Card>
  </Container>
  );
};

export default CartTotal;
