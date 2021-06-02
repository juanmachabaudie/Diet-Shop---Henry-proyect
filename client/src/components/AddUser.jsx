import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addUser } from "../redux/actions/userActions.js";
import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddUser() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const added = store.users.message;

  const [datos, setDatos] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    dispatch(addUser(datos));
    setDatos({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAdmin: "",
    });
  };

  const classes = useStyles();

  return (
    // <Grid
    // // container
    // // direction="column"
    // // alignItems="center"
    // // justifyContent="center"
    // // style={{ minHeight: "100vh" }}
    // >
    // <Grid item>
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={enviarDatos}
      >
        <Grid item direction="column">
          <Box textAlign="center">
            <Typography variant="h5" color="primary">
              Crear Usuario
            </Typography>
          </Box>
        </Grid>
        <Grid item direction="column">
          <TextField
            id="filled-name"
            label="Nombre de Usuario"
            name={datos.userName}
            onChange={handleInputChange}
            variant="outlined"
            className={classes.color}
          />
        </Grid>
        <Grid item direction="column">
          <TextField
            id="outlined-name"
            label="Correo Electronico"
            name={datos.email}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>
        <Grid item direction="column">
          <TextField
            label="Contraseña"
            name={datos.password}
            onChange={handleInputChange}
            variant="outlined"
            autoComplete="current-password"
            type="password"
            id="outlined-password-input"
          />
        </Grid>
        <Grid item direction="column">
          <TextField
            label="Confirmar Contraseña"
            name={datos.confirmPassword}
            onChange={handleInputChange}
            variant="outlined"
            type="password"
            id="outlined-password-input"
            autoComplete="current-password"
          />
        </Grid>
        <Grid item direction="column">
          <TextField
            id="outlined-name"
            label="Clave de administrador"
            name={datos.isAdmin}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>
        <Grid item direction="column">
          <Box textAlign="center">
            <Button
              size="large"
              variant="outlined"
              color="primary"
              href="#outlined-buttons"
              onSubmit={added.message}
              justify="center"
              AlignItems="center"
            >
              Agregar
            </Button>
          </Box>
        </Grid>
      </form>
    </Grid>
    // </Grid>
    // </Grid>
  );
}
