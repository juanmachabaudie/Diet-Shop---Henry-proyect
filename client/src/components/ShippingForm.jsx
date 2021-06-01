import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import jwt from "jsonwebtoken";
import { userShipping } from "../redux/actions/userActions.js";
import { uploadShippingData } from "../redux/actions/userActions.js";
import {goToCheckout} from "../redux/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  shippingForm: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function ShippingForm() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const shippingData = useSelector((store) => store.users.shippingData);

  let userEmail;
  if (sessionStorage.getItem("user")) {
    let tokeen;
    const token = sessionStorage.getItem("user");
    if (token[0] === '"') {
      tokeen = JSON.parse(token);
    } else {
      tokeen = token;
    }
    userEmail = jwt.decode(tokeen).email;
  }

  const [datos, setDatos] = useState({
    shippingAddress: "",
    shippingZip: "",
    shippingState: "",
    shippingCity: "",
    comments: "",
  });

  useEffect(() => {
    dispatch(userShipping(userEmail));
    setDatos({
      shippingAddress: shippingData.shippingAddress,
      shippingZip: shippingData.shippingZip,
      shippingState: shippingData.shippingState,
      shippingCity: shippingData.shippingCity,
      comments: shippingData.comments,
    });
  }, [
    userEmail,
    shippingData.shippingAddress,
    shippingData.shippingZip,
    shippingData.shippingState,
    shippingData.shippingCity,
    shippingData.comments,
    dispatch,
  ]);

  console.log(datos);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    dispatch(uploadShippingData(userEmail, datos));
  };

  const handleGoToCheckout = () => dispatch(goToCheckout(userEmail));

  const convinedOnClick = () => {
    enviarDatos();
    handleGoToCheckout();
  } 

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box m={1} className={classes.shippingForm}>
            <Typography variant="h5" color="initial">
              Datos de Envio
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box m={1} className={classes.shippingForm}>
            <TextField
              required
              name="shippingAddress"
              placeholder="Direccion"
              value={datos.shippingAddress}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box m={1} className={classes.shippingForm}>
            <TextField
              name="shippingZip"
              placeholder="Codigo Postal"
              value={datos.shippingZip}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box m={1} className={classes.shippingForm}>
            <TextField
              name="shippingState"
              placeholder="Provincia"
              value={datos.shippingState}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box m={1} className={classes.shippingForm}>
            <TextField
              name="shippingCity"
              placeholder="Ciudad"
              value={datos.shippingCity}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box m={1} className={classes.shippingForm}>
            <TextField
              name="comments"
              placeholder="Aclaración"
              value={datos.comments}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box m={1} className={classes.shippingForm}>
            <Button
              size="large"
              variant="outlined"
              color="primary"
              justify="center"
              AlignItems="center"
              onClick={convinedOnClick}
            >
              CONFIRMAR
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
