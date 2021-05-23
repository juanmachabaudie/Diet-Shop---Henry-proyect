import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Card } from "@material-ui/core";
import { useSelector } from "react-redux";
import makeStyles from './componentsStyles/CartTotalStyles'
import {useHistory} from 'react-router-dom'



export const CartTotal = () => {
  const [total, setTotal] = useState(0);
  const classes = makeStyles()
  const history = useHistory()
  //const dispatch = useDispatch();
  // Retrieve the JSON string
  const cartInLocal = localStorage.getItem("cart");
  // Parse JSON string to object
  const cartItems = JSON.parse(cartInLocal);

  let sumProduct = 0;
  if(cartItems) {
    for (var e of cartItems) {
      sumProduct += e.price * e.qty;
    }
} else {
  sumProduct = 0;
}


  useEffect(() => {
    setTotal(sumProduct);
  }, [sumProduct]);

  return (
    <Container>
      <Card className={classes.card}>
        <Typography variant="div" className={classes.title} color="secondary">SUBTOTAL</Typography> <hr/>
        <Typography variant='h4' className={classes.title}> ${total}</Typography> 
        <Button variant='contained' color='primary' className={classes.button}>Finalizar compra</Button>
      </Card>
    </Container>
  );
};

export default CartTotal;
