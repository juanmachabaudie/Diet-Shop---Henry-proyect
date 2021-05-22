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
  FormControl,
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
    <Grid>
      <FormControl
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
            id="filled-name"
            label="Nombre de Usuario"
            value={datos.userName}
            onChange={handleInputChange}
            variant="filled"
            name='userName'
            className={classes.color}
          />
          <TextField
            id="outlined-name"
            label="Correo Electronico"
            value={datos.email}
            onChange={handleInputChange}
            variant="outlined"
            name='email'
          />
          <TextField
            id="outlined-name"
            label="Contraseña"
            value={datos.password}
            onChange={handleInputChange}
            variant="outlined"
            name='password'
          />
          <TextField
            id="outlined-name"
            label="Confirmar Contraseña"
            value={datos.confirmPassword}
            onChange={handleInputChange}
            variant="outlined"
            name='confirmPassword'
          />
          <TextField
            id="outlined-name"
            label="Clave de administrador"
            value={datos.isAdmin}
            onChange={handleInputChange}
            variant="outlined"
            name='isAdmin'
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
      </FormControl>
    </Grid>
  );
}
