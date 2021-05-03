import React, { useState } from "react";
import UseStyles from "./styles";
import { useSelector } from 'react-redux';
import { IconButton, TextField } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { Send } from "@material-ui/icons";
import { URL_BACK_USERS } from "../../auxiliar/constants/constants";

const ResetUser = () => {
    const classes = UseStyles();
    const [inputs, setInputs] = useState({
        ouser: "",
        user: "",
        cuser: ""
    });
    const [errors, setErrors] = useState({});
    const data = useSelector((store) => store.user)

    const onHandleChange = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });

        if (e.target.id === "ouser") {
            if (e.target.value === "" || e.target.value === data.userName) {
                setErrors({ ...errors, [e.target.id]: false });
            } else {
                setErrors({ ...errors, [e.target.id]: true });
            }
        }

        if (e.target.id === "user") {
            if (e.target.value === "") {
                setErrors({ ...errors, [e.target.id]: true });
            } else {
                setErrors({ ...errors, [e.target.id]: false });
            }
        }

        if (e.target.id === "cuser") {
            if (e.target.value === "" || inputs.user === e.target.value) {
                setErrors({ ...errors, [e.target.id]: false });
            } else {
                setErrors({ ...errors, [e.target.id]: true });
            }
        }
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            email: data.email,
            userName: inputs.user
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
                        return alert("Usuario modificado")
                    }
                })
            setInputs({
                ouser: "",
                user: "",
                cuser: ""
            })
        }
    };

    return (
        <Container maxWidth="sm">
            <h4>REESTABLECER USUARIO</h4>
            <form onSubmit={onHandleSubmit} className={classes.Form}>
                <TextField
                    InputProps={{ className: classes.InputText }}
                    InputLabelProps={{ className: classes.InputTextLabel }}
                    className={classes.Input}
                    id="ouser"
                    value={inputs.ouser}
                    label="Usuario actual"
                    type="text"
                    onChange={(e) => onHandleChange(e)}
                    variant="outlined"
                    error={!!errors.ouser}
                    helperText={errors.ouser && "Debe ingresar su usuario actual"}
                />
                <TextField
                    InputProps={{ className: classes.InputText }}
                    InputLabelProps={{ className: classes.InputTextLabel }}
                    className={classes.Input}
                    id="user"
                    value={inputs.user}
                    label="Nuevo usuario"
                    type="text"
                    onChange={(e) => onHandleChange(e)}
                    variant="outlined"
                    error={!!errors.user}
                    helperText={errors.user && "No puede estar vacío"}
                />
                <TextField
                    InputProps={{ className: classes.InputText }}
                    InputLabelProps={{ className: classes.InputTextLabel }}
                    className={classes.Input}
                    id="cuser"
                    value={inputs.cuser}
                    label="Confirmar usuario"
                    type="text"
                    onChange={(e) => onHandleChange(e)}
                    variant="outlined"
                    error={!!errors.cuser}
                    helperText={errors.cuser && "Los usuarios no coinciden"}
                />
                <IconButton onClick={onHandleSubmit} className={classes.Button}>
                    <Send />
                </IconButton>
            </form>
        </Container>
    );
};

export default ResetUser;
