import React, { useState } from "react";
import UseStyles from "./styles";
import { useSelector } from 'react-redux';
import { IconButton, TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Send } from "@material-ui/icons";
import { isStrongPwd } from "../../auxiliar/functions/validations";
import { URL_BACK_USERS } from "../../auxiliar/constants/constants";

const ResetPassword = () => {
    const classes = UseStyles();
    const [inputs, setInputs] = useState({
        password: "",
        cpassword: ""
    });
    const [errors, setErrors] = useState({});
    const data = useSelector((store) => store.user)
  
    const onHandleChange = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });

        if (e.target.id === "password") {
          var isStrong = isStrongPwd(e.target.value);
          if (e.target.value === "" || !isStrong.error) {
            setErrors({ ...errors, [e.target.id]: false });
          } else {
            setErrors({ ...errors, [e.target.id]: isStrong.error });
          }
        }
      
        if (e.target.id === "cpassword") {
          if (e.target.value === "" || inputs.password === e.target.value) {
            setErrors({ ...errors, cpassword: false });
          } else {
            setErrors({ ...errors, cpassword: true });
          }
        }
  };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            firstName: data.firstName,
            lastName: data.lastName,
            password: inputs.password,
            email: data.email,
            userName: data.user
        }
        if (Object.values(errors).filter(x => x === true).length === 0) {
            fetch(`${URL_BACK_USERS}/${data.id}`, {
                method: "PUT",
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(resp => {
                    if (resp.status === 200) {
                        return alert("Email modificado")
                    }
                })
            setInputs({
                password: "",
                cpassword: ""
            })
        }
    };

    return (
        <Container maxWidth="sm">
            <h4>REESTABLECER CONTRASEÑA</h4>
            <form onSubmit={onHandleSubmit} className={classes.Form}>
                <TextField
                    InputProps={{ className: classes.InputText }}
                    InputLabelProps={{ className: classes.InputTextLabel }}
                    className={classes.Input}
                    id="password"
                    value={inputs.password}
                    label="Nueva contraseña"
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
                    value={inputs.cpassword}
                    label="Confirmar contraseña"
                    type="password"
                    onChange={(e) => onHandleChange(e)}
                    variant="outlined"
                    error={errors.cpassword}
                    helperText={errors.cpassword && "las contraseñas no coinciden"}
                />
                <IconButton onClick={onHandleSubmit} className={classes.Button}>
                    <Send />
                </IconButton>
            </form>
        </Container>
    );
};

export default ResetPassword;
