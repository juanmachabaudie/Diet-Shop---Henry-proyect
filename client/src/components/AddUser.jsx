// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { addUser } from "../redux/actions/userActions.js";

// export default function AddUser() {
//   const dispatch = useDispatch();
//   const store = useSelector((store) => store);

//   const added = store.users.message;

//   const [datos, setDatos] = useState({
//     userName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     isAdmin: "",
//   });

//   const handleInputChange = (event) => {
//     setDatos({
//       ...datos,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const enviarDatos = (event) => {
//     event.preventDefault();
//     dispatch(addUser(datos));
//     setDatos({
//       userName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       isAdmin: "",
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={enviarDatos}>
//         <div>
//           <section>
//             <input
//               value={datos.userName}
//               type="text"
//               placeholder="Nombre De Usuario"
//               name="userName"
//               onChange={handleInputChange}
//             />
//           </section>
//           <section>
//             <input
//               value={datos.email}
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleInputChange}
//             />
//           </section>
//           <section>
//             <input
//               value={datos.password}
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleInputChange}
//             />
//           </section>
//           <section>
//             <input
//               value={datos.confirmPassword}
//               type="password"
//               placeholder="confirmPassword"
//               name="confirmPassword"
//               onChange={handleInputChange}
//             />
//           </section>
//           <section>
//             <input
//               value={datos.isAdmin}
//               type="password"
//               placeholder="Clave de administrador"
//               name="isAdmin"
//               onChange={handleInputChange}
//             />
//           </section>
//         </div>
//         <input type="submit" value="Agregar" />
//         <div>{added.message}</div>
//       </form>
//     </div>
//   );
// }

import { useDispatch } from "react-redux";
import { useState } from "react";
import { addUser } from "../redux/actions/userActions";

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
  const classes = useStyles();

  const dispatch = useDispatch();

  const [datos, setDatos] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
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
        <Grid item>
          <Box textAlign="center">
            <Typography variant="h5" color="initial">
              Nuevo Usuario
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <TextField
              value={datos.firstName}
              type="firstName"
              placeholder="Nombre"
              name="firstName"
              onChange={handleInputChange}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <TextField
              value={datos.lastName}
              type="lastName"
              placeholder="Apellido"
              name="lastName"
              onChange={handleInputChange}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <TextField
              value={datos.email}
              type="Email"
              placeholder="Correo Electronico"
              name="email"
              onChange={handleInputChange}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <TextField
              value={datos.password}
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleInputChange}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <TextField
              value={datos.confirmPassword}
              type="confirmPassword"
              placeholder="Confirmar Contraseña"
              name="confirmPassword"
              onChange={handleInputChange}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box textAlign="center">
            <Button
              size="large"
              variant="outlined"
              color="primary"
              type="submit"
            >
              Confirmar
            </Button>
          </Box>
        </Grid>
      </form>
    </Grid>
  );
}
