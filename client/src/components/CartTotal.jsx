import React, { useState, useEffect } from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";

export const CartTotal = () => {
  const [total, setTotal] = useState(0);

  //const dispatch = useDispatch();
  // Retrieve the JSON string
  const cartInLocal = localStorage.getItem("cart");
  // Parse JSON string to object
  const cartItems = JSON.parse(cartInLocal);

  let sumProduct = 0;
  for (var e of cartItems) {
    sumProduct += e.price * e.quantity;
  }
  useEffect(() => {
    setTotal(sumProduct);
  }, [sumProduct]);

  return (
    <Container>
      <Typography> Total: {total}</Typography>
      <Button>Comprar</Button>
    </Container>
  );
};

export default CartTotal;
