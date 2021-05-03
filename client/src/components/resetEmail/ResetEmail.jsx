import React, { useState } from "react";
import UseStyles from "./styles";
import { useSelector } from 'react-redux';
import { IconButton, TextField } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { Send } from "@material-ui/icons";
import { isEmail } from "../../auxiliar/functions/validations";
import { URL_BACK_USERS } from "../../auxiliar/constants/constants";

const ResetEmail = () => {
    const classes = UseStyles();
    const [inputs, setInputs] = useState({
        email: "",
        oemail: "",
        cemail: ""
    });
    const [errors, setErrors] = useState({});
    const data = useSelector((store) => store.user)

    const onHandleChange = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });

        if (e.target.id === "oemail") {
            if (e.target.value === "" || e.target.value === data.email) {
                setErrors({ ...errors, [e.target.id]: false });
            } else {
                setErrors({ ...errors, [e.target.id]: true });
            }
        }

        if (e.target.id === "email") {
            if (e.target.value === "" || isEmail(e.target.value)) {
                setErrors({ ...errors, [e.target.id]: false });
            } else {
                setErrors({ ...errors, [e.target.id]: true });
            }
        }

        if (e.target.id === "cemail") {
            if (e.target.value === "" || inputs.email === e.target.value) {
                setErrors({ ...errors, cemail: false });
            } else {
                setErrors({ ...errors, cemail: true });
            }
        }
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            email: inputs.email,
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
                email: "",
                oemail: "",
                cemail: ""
            })
        }
    };

    return (
        <Container maxWidth="sm">
            <h4>REESTABLECER EMAIL</h4>
            <form onSubmit={onHandleSubmit} className={classes.Form}>
                <TextField
                    InputProps={{ className: classes.InputText }}
                    InputLabelProps={{ className: classes.InputTextLabel }}
                    className={classes.Input}
                    id="oemail"
                    value={inputs.oemail}
                    label="Email actual"
                    type="text"
                    onChange={(e) => onHandleChange(e)}
                    variant="outlined"
                    error={!!errors.oemail}
                    helperText={errors.oemail && "Debe ingresar su email actual"}
                />
                <TextField
                    InputProps={{ className: classes.InputText }}
                    InputLabelProps={{ className: classes.InputTextLabel }}
                    className={classes.Input}
                    id="email"
                    value={inputs.email}
                    label="Nuevo email"
                    type="text"
                    onChange={(e) => onHandleChange(e)}
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email && "Correo invalido"}
                />
                <TextField
                    InputProps={{ className: classes.InputText }}
                    InputLabelProps={{ className: classes.InputTextLabel }}
                    className={classes.Input}
                    id="cemail"
                    value={inputs.cemail}
                    label="Confirmar email"
                    type="text"
                    onChange={(e) => onHandleChange(e)}
                    variant="outlined"
                    error={errors.cemail}
                    helperText={errors.cemail && "Los emails no coinciden"}
                />
                <IconButton onClick={onHandleSubmit} className={classes.Button}>
                    <Send />
                </IconButton>
            </form>
        </Container>
    );
};

export default ResetEmail;
