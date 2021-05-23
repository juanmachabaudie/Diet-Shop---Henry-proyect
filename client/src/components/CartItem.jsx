import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  changeProductQuantity,
} from "../redux/actions/cartActions";

import defaultImg from '../imgs/default.svg';

import {
  Button,
  Container,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

//estilos
const useStyle = makeStyles({
  item: {
    marginLeft: "auto",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    alignItems: "center",
    background: "#f3f6f7",
  },
  image: {
    height: 150,
    display: "flex",
    justifyContent: "space-between",
  },
});


//function
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const history = useHistory();
  
  const [quantity, setQuantity] = useState(product.quantity)

  const removeProductFromCart = () =>
    dispatch(
      removeFromCart(product.uuid),
      history.push("/"),
      history.push("/cart"),
      window.scrollTo(0, 0)
    );

    const handleChangeQuantity = e => {
      const { value } = e.target;
      setQuantity(value);
      dispatch(changeProductQuantity(product.uuid, Number(value)));
    };

  return (
    <Container className={classes.item}>
      <div>
        <img className={classes.image} src={product.image || defaultImg} alt={product.name} />
      </div>
      <Typography variant="span">{product.name}</Typography>
      <Typography variant="span">${product.price}</Typography>
      <TextField
        type='number'
        value={quantity}
        onChange={handleChangeQuantity}
      />
      <Button variant="contained" onClick={removeProductFromCart}>
        <FontAwesomeIcon size="2x" icon={faTrashAlt} />
      </Button>
    </Container>
  );
};

export default CartItem;
