import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { makeStyles } from "@material-ui/core/styles";
import { sweetAlert } from "../helpers/utils.jsx";
import defaultImg from "../imgs/default.svg";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { deleteProduct } from "../redux/actions/productActions";
import { getProducts } from "../redux/actions/productActions";
import { decodeToken } from "../helpers/utils.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "0 0 50px rgb(234, 232, 300)",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  avatar: {
    backgroundColor: grey[500],
  },
  btn: {
    display: "flex",
    alignItems: "center",
  },
  bottomBtn: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function ProductCard({
  uuid,
  name,
  description,
  stock,
  image,
  price,
}) {
  const products = useSelector((store) => store.products.products);

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [a, setA] = useState([]);

  const user = decodeToken();
  let userAdmin
 if(user){userAdmin = user.isAdmin}

  // useEffect(() => {
  //   setA(products);
  // },[a])

  function clickToAdd() {
    dispatch(addToCart(uuid, name, description, stock, image, price, 1));
    sweetAlert({
      icon: "success",
      title: `${name} Agregado al carrito`,
      showConfirmButton: false,
      timer: 1000,
    });
  }

  function handleClick() {
    dispatch(findProduct(uuid));
    history.push("/product/detail/" + uuid);
    window.scrollTo(0, 0);
  }

  function onClose() {
    dispatch(deleteProduct(uuid));
    dispatch(getProducts());
  }

  return (
    <Card className={classes.root}>
      {user? userAdmin? (
        <Button
          className={classes.btn}
          onClick={onClose}
          color="secondary"
          variant="contained"
        >
          <FontAwesomeIcon icon={faTimes} size={"2x"} />
        </Button>
      ) : (
        <></>
      ):<></>}
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {stock ? (
              <FontAwesomeIcon icon={faCheck} color="lightgreen" />
            ) : (
              <FontAwesomeIcon icon={faTimes} color="red" />
            )}
          </Avatar>
        }
        title={name}
      />
      <CardMedia
        className={classes.media}
        image={image || defaultImg}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description} <hr />${price}
        </Typography>
      </CardContent>
      <CardActions className={classes.bottomBtn}>
        <IconButton aria-label="agregar" onClick={clickToAdd}>
          <FontAwesomeIcon icon={faCartPlus} />
        </IconButton>
        <Button onClick={handleClick} color="primary" variant="contained">
          DETALLE
        </Button>
      </CardActions>
      <Collapse in={classes.expand} timeout="auto" unmountOnExit></Collapse>
    </Card>
  );
}
