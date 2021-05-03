import React, { useContext, useState } from "react";
import UseStyles from "./styles";
import {
  Dialog,
  DialogContent,
  IconButton,
  responsiveFontSizes,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Send,
  ArrowBack,
  Facebook,
  Mail,
  Instagram,
  SwapVertTwoTone,
} from "@material-ui/icons";
import PopUpsContext from "../../context/PopUps/PopUpsContext";
import FunctionsContext from "../../context/contextFunctions/functionsContext";
import { facebookProvider, googleProvider } from "../../config/authMethods";
import socialMediaAuth from "../../service/auth";
import { logIn, register, sendEmail} from "../../auxiliar/functions/otherFunctions";
import { guestToDataBase } from "../../auxiliar/functions/cartFunctions";
import { getCartGuest } from "../../auxiliar/functions/CartWest";
import { useDispatch } from "react-redux";
import ProductsContext from "../../context/Products/ProductsContext";
import { isEmail } from "../../auxiliar/functions/validations";
import swal from "sweetalert";

const Login = () => {
  const classes = UseStyles();
  const { setLogin, setRegister, login } = useContext(PopUpsContext);
  const { onLogIn } = useContext(FunctionsContext);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const { setTotal, setCartCount } = useContext(ProductsContext);
  const dispatch = useDispatch();

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    const fullName = res.displayName.split(" ");
    const inputs = {
      firstName: fullName[0],
      lastName: fullName[2] || fullName[1],
      email: res.email,
      password: res.uid,
      userName: res.uid,
    };

    await register(inputs)
      .then((r) => r.json())
      .then((response) => {
        if (!response.error) {
          sendEmail(inputs.email);
          guestToDataBase(response.user.id, getCartGuest().products);
        }
      });
    await logIn(inputs.userName, inputs.password)
      .then((r) => r.json())
      .then((user) => {
        onLogIn(user);
      });
    setLogin(false);
  };

  const handleSubmit = async () => {
    let error = false;
    await logIn(inputs.userName, inputs.password)
      .then((r) => r.json())
      .then((user) => {
        if (user.userError) {
          error = true;
          return setErrors({ ...errors, userError: user.userError });
        }
        if (user.passwordError) {
          error = true;
          return setErrors({ ...errors, passwordError: user.passwordError });
        }
        onLogIn(user);
      });
    !error && setLogin(false);
  };

  // POP-UP de recupero de contraseña
  const handleClick = async () => {
    //Al abrir cierro la ventana de login
    setLogin(false);
    // SWAL es una funcion de sweetalert
    await swal({
      text: "INGRESA TU EMAIL  👇",
      content: "input",
      button: {
        text: "Enviar",
        closeModal: false,
      },
    }).then(async (email) => {
      //isEmail es una funcion que verifica que sea un correo valido
      if (isEmail(email)) {
        return await fetch("http://localhost:3001/auth/passwordReset", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }).then((result) => {
          if (result.status === 401) {
            return swal({
              title: "Email invalido",
              text: "Prueba otra vez  🧐",
              icon: "error",
            });
          } else if (result.status === 200) {
            return swal({
              title: "Email enviado  📬",
              text: "Revisa tu correo",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <Dialog
      PaperProps={{ style: { borderRadius: 20, minWidth: "70%" } }}
      className={classes.DialogContainer}
      TransitionComponent={Slide}
      open={login}
      maxWidth="xl"
      onBackdropClick={() => setLogin(false)}
    >
      <DialogContent className={classes.DialogContent}>
        <IconButton
          onClick={() => setLogin(false)}
          className={classes.ArrowBack}
        >
          <ArrowBack />
        </IconButton>
        <h4 className={classes.Register}>Ingresar</h4>
        <form className={classes.Form}>
          <TextField
            InputProps={{ className: classes.TextInput }}
            InputLabelProps={{ className: classes.TextInputLabel }}
            className={classes.Input}
            id="userName"
            label="Usuario"
            type="search"
            variant="outlined"
            onChange={(e) => {
              setInputs({ ...inputs, userName: e.target.value });
              setErrors({});
            }}
            error={errors.userError}
            helperText={errors.userError}
          />
          <TextField
            InputProps={{ className: classes.TextInput }}
            InputLabelProps={{ className: classes.TextInputLabel }}
            className={classes.Input}
            id="password"
            label="Contraseña"
            type="password"
            variant="outlined"
            onChange={(e) => {
              setInputs({ ...inputs, password: e.target.value });
              setErrors({});
            }}
            error={errors.passwordError}
            helperText={errors.passwordError}
          />
          <IconButton onClick={handleSubmit} className={classes.Button}>
            <Send />
          </IconButton>
        </form>
        <hr className={classes.Line} />
        <Typography className={classes.Subtitle} color="inherit">
          O ingresa con:{" "}
        </Typography>
        <div className={classes.IconsDiv}>
          <IconButton>
            <Facebook
              onClick={() => handleOnClick(facebookProvider)}
              className={classes.Icon}
              style={{ color: "#3b5998" }}
            />
          </IconButton>
          <IconButton>
            <Mail
              onClick={() => handleOnClick(googleProvider)}
              className={classes.Icon}
              style={{ color: "#E60023" }}
            />
          </IconButton>
          <IconButton>
            <Instagram
              className={classes.Icon}
              style={{
                color: "white",
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
              }}
            />
          </IconButton>
        </div>
        <div>
          <Typography
            className={classes.Link2}
            onClick={() => {
              setLogin(false);
              setRegister(true);
            }}
          >
            Registrarse
          </Typography>
          <br />
          <Typography
            className={classes.Link2}
            onClick={() => {
              handleClick();
            }}
          >
            ¿Olvidaste tu Contraseña?
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
