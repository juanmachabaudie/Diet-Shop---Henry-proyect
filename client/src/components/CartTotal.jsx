import React, { useState, useEffect } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const CartTotal = ({cartItems}) => {
  const history = useHistory();
  
  const [total, setTotal] = useState(0);
  



  function suma (cartItems){
    let sumProduct = 0;
    for (var e of cartItems) {
      sumProduct += e.price * e.quantity;
    }
    return sumProduct;
    console.log('suma'+ sumProduct)
  }
  
  
  
  useEffect(() => {
    setTotal(suma(cartItems));
    
    console.log('estado '+total)
    
  }, [total]);

  return (
    <Container>
      <Typography> Total: {total}</Typography>
      <Button>Comprar</Button>
    </Container>
  );
};

export default CartTotal;
