import React, { useState } from "react";
import UseStyles from "./styles";
import { useSelector } from 'react-redux';
import { IconButton, TextField } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import { Send } from "@material-ui/icons";
import { URL_BACK_USERS } from "../../auxiliar/constants/constants";

const ResetName = () => {
    const classes = UseStyles();
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
    });
    const [errors, setErrors] = useState({
        nombre: {
            bol: true,
            msg: "El nombre no puede estar vacío",
        },
        apellido: {
            bol: true,
            msg: "El apellido no puede estar vacío",
        }
    });
    const data = useSelector((store) => store.user)

    const onHandleChange = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });

        if (e.target.id === "nombre") {
            if (e.target.value === "") {
                return setErrors({
                    ...errors,
                    [e.target.id]: {
                        bol: true,
                        msg: `El ${e.target.id} no puede estar vacío`,
                    }
                });
            } else if (data.firstName === e.target.value) {
                setErrors({
                    ...errors, [e.target.id]: {
                        bol: true,
                        msg: `Su nuevo ${e.target.id} debe ser distinto a su ${e.target.id} actual`,
                    }
                });
            } else {
                setErrors({
                    ...errors, [e.target.id]: {
                        bol: false
                    }
                })
            }
        }

        if (e.target.id === "apellido") {
            if (e.target.value === "") {
                return setErrors({
                    ...errors,
                    [e.target.id]: {
                        bol: true,
                        msg: `El ${e.target.id} no puede estar vacío`,
                    }
                });
            } else if (data.lastName === e.target.value) {
                setErrors({
                    ...errors, [e.target.id]: {
                        bol: true,
                        msg: `Su nuevo ${e.target.id} debe ser distinto a su ${e.target.id} actual`,
                    }
                });
            } else {
                setErrors({
                    ...errors, [e.target.id]: {
                        bol: false
                    }
                })
            }
        }
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        const obj = {
            firstName: inputs.nombre || data.firstName,
            lastName: inputs.apellido || data.lastName,
            email: data.email,
            userName: data.userName
        }
        if (Object.values(errors.nombre).filter(x => x === true).length === 0 && Object.values(errors.apellido).filter(x => x === true).length === 0) {
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
                nombre: "",
                apellido: "",
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
                    id="nombre"
                    value={inputs.nombre}
                    label="Nuevo nombre"
                    type="text"
                    onChange={(e) => onHandleChange(e)}
                    variant="outlined"
                    error={!!errors.nombre.bol}
                    helperText={errors.nombre.bol && errors.nombre.msg}
                />
                <TextField
                    InputProps={{ className: classes.InputText }}
                    InputLabelProps={{ className: classes.InputTextLabel }}
                    className={classes.Input}
                    id="apellido"
                    value={inputs.apellido}
                    label="Nuevo Apellido"
                    type="text"
                    onChange={(e) => onHandleChange(e)}
                    variant="outlined"
                    error={!!errors.apellido.bol}
                    helperText={errors.apellido.bol && errors.apellido.msg}
                />
                <IconButton onClick={onHandleSubmit} className={classes.Button}>
                    <Send />
                </IconButton>
            </form>
        </Container>
    );
};

export default ResetName;
