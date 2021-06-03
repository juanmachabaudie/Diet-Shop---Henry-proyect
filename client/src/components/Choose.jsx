import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeliveryStatus } from "../redux/actions/checkoutActions.js";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import { Box, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0)
  },

}));

export default function Choose() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const history = useHistory()
  const dispatch = useDispatch()

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };
  const handleSubmit = (event) => {
      event.preventDefault();
      if (value === "Retiro en sucursal") {
        dispatch(setDeliveryStatus(true))
     history.push('/location')
    } else if (value === "Envio a domicilio") {
        history.push('/checkout')
        dispatch(setDeliveryStatus(false))
    } else {
      return setError(true);
    }
  };

  return (
      
      <Grid item xs={12} sm={12} md={12} lg={12}>
    <form onSubmit={handleSubmit}>
      <FormControl
        component="fieldset"
        error={error}
        className={classes.formControl}
      >
        <FormLabel component="legend">
          Como quieres obtener tu producto?
        </FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="Retiro en sucursal"
            control={<Radio />}
            label="Retiro en sucursal"
          />
          <FormControlLabel
            value="Envio a domicilio"
            control={<Radio />}
            label="Envio a domicilio"
          />
        </RadioGroup>

        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          SIGUIENTE
        </Button>
      </FormControl>
    </form>
    </Grid>
  
  );
}
