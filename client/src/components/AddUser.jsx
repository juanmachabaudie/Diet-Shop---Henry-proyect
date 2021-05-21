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
      email: "",
      password: "",
      confirmPassword: "",
      isAdmin: "",
    });
  };

  const classes = useStyles();

  return (
    <Grid>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={enviarDatos}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Typography variant="h5" color="initial">
            Crear Usuario
          </Typography>
          <TextField
            id="outlined-name"
            label="Correo Electronico"
            value={datos.email}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Contraseña"
            value={datos.password}
            onChange={handleInputChange}
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Confirmar Contraseña"
            value={datos.confirmPassword}
            onChange={handleInputChange}
            variant="outlined"
          />
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onSubmit={added.message}
            justify="center"
            AlignItems="center"
          >
            Agregar
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}
