import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  changeProductQuantity,
} from "../redux/actions/cartActions";

import defaultImg from '../imgs/default.svg';

import {addToCart} from '../redux/actions/cartActions.js';

import {
  Button,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
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
  
  const [refres, setRefres] = useState (product.quantity)

  useEffect(() => {
  }, [refres])

  const removeProductFromCart = () =>
    dispatch(
      removeFromCart(product.uuid),
      history.push("/"),
      history.push("/cart"),
      window.scrollTo(0, 0)
    );

    function clickToAdd(){
      if(refres<product.stock){
      dispatch(addToCart(product.uuid, 1))
      history.push('/cart')
      setRefres(refres+1)
      }
    }

    function clickToMin(){
      if(refres>1){
      dispatch(addToCart(product.uuid, -1))
      history.push('/cart')
      setRefres(refres-1)
      }
    }

  return (
    <Container className={classes.item}>
      <div>
        <img className={classes.image} src={product.image || defaultImg} alt={product.name} />
      </div>
      <Typography variant="span">{product.name}</Typography>
      <Typography variant="span">${product.price}</Typography>
      <Button color="primary" variant="contained" onClick={clickToAdd}>
        <FontAwesomeIcon size="2x" icon={faPlusCircle} />
      </Button>
      <Typography variant="span">{refres}</Typography>
      <Button color="secondary" variant="contained" onClick={clickToMin}>
        <FontAwesomeIcon size="2x" icon={faMinusCircle} />
      </Button>
      <Button variant="contained" onClick={removeProductFromCart}>
        <FontAwesomeIcon size="2x" icon={faTrashAlt} />
      </Button>
    </Container>
  );
};

export default CartItem;
