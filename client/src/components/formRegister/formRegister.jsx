import React, { useContext, useEffect, useState} from "react";
import UseStyles from "./styles";
import { Dialog, DialogContent, IconButton, Slide, TextField} from "@material-ui/core";
import { Send, ArrowBack} from "@material-ui/icons";
import PopUpsContext from "../../context/PopUps/PopUpsContext";
import { isEmail, isStrongPwd } from "../../auxiliar/functions/validations";
import { logIn, register as registerFunction, sendEmail } from '../../auxiliar/functions/otherFunctions'
import FunctionsContext from '../../context/contextFunctions/functionsContext'

const FormRegister = () => {
  const classes = UseStyles();
  const { setLogin, setRegister, register } = useContext(PopUpsContext);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const {onLogIn} = useContext(FunctionsContext)

  useEffect(() => {
    setInputs({});
    setErrors({});
  }, [register])
  

  const onHandleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });

    if (e.target.id === "email") {
      if (e.target.value === "" || isEmail(e.target.value)) {
        setErrors({ ...errors, [e.target.id]: false });
      } else {
        setErrors({ ...errors, [e.target.id]: true });
      }
    }
    if (e.target.id === "password") {
      var isStrong = isStrongPwd(e.target.value);
      if (e.target.value === "" || !isStrong.error) {
        setErrors({ ...errors, [e.target.id]: false });
      } else {
        setErrors({ ...errors, [e.target.id]: isStrong.error });
      }
      // if (e.target.value === inputs.cpassword || inputs.cpassword === ""){
      //     setErrors({...errors, cpassword: false})
      // }else{
      //     setErrors({...errors, cpassword: true})
      // }
    }
    if (e.target.id === "cpassword") {
      if (e.target.value === "" || inputs.password === e.target.value) {
        setErrors({ ...errors, cpassword: false });
      } else {
        setErrors({ ...errors, cpassword: true });
      }
    }
  };

  const onHandleSubmit = async (e) => {
    let error;
    await registerFunction(inputs)
    .then((res) => res.json())
    .then((response) => {
     (error = response.error) && setErrors({ ...errors, userName: true });
    });
    if (!error){
      sendEmail(inputs.email);
      await logIn(inputs.userName, inputs.password)
        .then(r => r.json())
        .then(
            async user => onLogIn(user)
        )   
      setRegister(false);
    } 
  };

  return (
    <Dialog
      PaperProps={{ style: { borderRadius: 20, minWidth: "70%" } }}
      className={classes.DialogContainer}
      TransitionComponent={Slide}
      open={register}
      maxWidth="xl"
      onBackdropClick={()=> setRegister(false)} 
    >
      <DialogContent className={classes.DialogContent}>
        <IconButton
          onClick={() => {
            setRegister(false);
            setLogin(true);
          }}
          className={classes.ArrowBack}
        >
          <ArrowBack />
        </IconButton>
        <h4 className={classes.Register}>REGISTRO</h4>
        <form onSubmit={(!inputs.firstName || !inputs.lastName || !inputs.email || !inputs.userName || !inputs.password || !inputs.cpassword||
            errors.userName || errors.password || errors.cpassword || errors.email) ? onHandleSubmit : undefined}  className={classes.Form}>
          <div style={{ marginBottom: "10px" }}>
            <TextField
              style={{ paddingRight: "5px" }}
              InputProps={{ className: classes.InputText }}
              InputLabelProps={{ className: classes.InputTextLabel }}
              id="firstName"
              label="Nombres"
              type="search"
              variant="outlined"
              onChange={(e) => onHandleChange(e)}
            />
            <TextField
              style={{ paddingLeft: "5px" }}
              InputProps={{ className: classes.InputText }}
              InputLabelProps={{ className: classes.InputTextLabel }}
              id="lastName"
              label="Apellido"
              type="search"
              onChange={(e) => onHandleChange(e)}
              variant="outlined"
            />
          </div>
          <TextField
            InputProps={{ className: classes.InputText }}
            InputLabelProps={{ className: classes.InputTextLabel }}
            className={classes.Input}
            id="userName"
            label="Nombre de usuario"
            variant="outlined"
            error={errors.userName}
            helperText={
              errors.userName && "usuario o correo ya en uso"
            }
            onChange={(e) => {onHandleChange(e); setErrors({...errors, userName: false})}}
          />
          <TextField
            InputProps={{ className: classes.InputText }}
            InputLabelProps={{ className: classes.InputTextLabel }}
            className={classes.Input}
            id="email"
            label="Email"
            autoComplete="email"
            type="email"
            onChange={(e) => onHandleChange(e)}
            error={errors.email}
            variant="outlined"
            helperText={errors.email && "Correo invalido"}
          />
          <TextField
            InputProps={{ className: classes.InputText }}
            InputLabelProps={{ className: classes.InputTextLabel }}
            className={classes.Input}
            id="password"
            label="Contraseña"
            type="password"
            onChange={(e) => onHandleChange(e)}
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password && errors.password}
          />
          <TextField
            InputProps={{ className: classes.InputText }}
            InputLabelProps={{ className: classes.InputTextLabel }}
            className={classes.Input}
            id="cpassword"
            label="Confirmar contraseña"
            type="password"
            onChange={(e) => onHandleChange(e)}
            variant="outlined"
            error={errors.cpassword}
            helperText={errors.cpassword && "las contraseñas no coinciden"}
          />
          <IconButton 
          disabled={!inputs.firstName || !inputs.lastName || !inputs.email || !inputs.userName || !inputs.password || !inputs.cpassword||
            errors.userName || errors.password || errors.cpassword || errors.email}
          onClick={onHandleSubmit} className={classes.Button}>
            <Send />
          </IconButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormRegister;
