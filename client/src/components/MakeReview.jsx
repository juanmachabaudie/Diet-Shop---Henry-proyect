import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addReview } from "../redux/actions/productActions";
import PropTypes from "prop-types";
import jwt from "jsonwebtoken";
import {
  TextField,
  Container,
  Button,
  withStyles,
  Typography,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

//COMPONENT
const MakeReview = ({productUuid}) => {
  const dispatch = useDispatch();
  // Parse JSON string to object

  const session = sessionStorage.getItem("user");
  let token = JSON.parse(session);
  const user = jwt.decode(token);

  const CHARACTER_LIMIT = 200;
  const [values, setValues] = useState({
    name: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const [count, setCount] = useState(1);

  const userRating = (e) => {
    setCount(e.target.value);
  };

  const handleClick = () => {
    let data = {
      userMail: user.email,
      productUuid,
      text: values.name,
      rating: count,
    };

    dispatch(addReview(data));
  };

  return (
    <div>
      <Container maxWidth="sm">
        {/* TEXT */}
        <TextField
          label="Escribe tu Reseña"
          fullWidth="true"
          multiline
          inputProps={{ maxLength: CHARACTER_LIMIT }}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
          helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
        ></TextField>

        {/* RATING */}
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Custom icon and color</Typography>
          <StyledRating
            name="customized-color"
            onClick={userRating}
            defaultValue={1}
            getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" />}
          />
        </Box>

        {/* SEND INFO */}
        <Button variant="contained" color="default" onClick={handleClick}>
          Enviar
        </Button>
      </Container>
    </div>
  );


/* import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Container, Button } from "@material-ui/core";
import { addReview } from "../redux/actions/productActions";
import jwt from "jsonwebtoken";

const MakeReview = ({productUuid}) => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.products.message);

  const CHARACTER_LIMIT = 200;
  const [values, setValues] = useState({
    name: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };


  function enviarReview(){
    const session = sessionStorage.getItem("user");

    //fijaerm q este en una cuenta
    if(session)
    {
      let token = JSON.parse(session);
      const user = jwt.decode(token);

      const data = {
        userMail: user.email,
        productUuid,
        text: values.name
      }
      //fijarme si compro ese producto
      console.log(data)
      dispatch(addReview(data))   

      

      console.log(message);


      //puedo despachar la accion 
  
    }
    else{
      alert('registrateputo');
    }

 
  }

  return (
    <div>
      <Container maxWidth="sm">
        <TextField
          label="Dejanos tu Comentario..."
          fullWidth="true"
          multiline
          inputProps={{ maxLength: CHARACTER_LIMIT }}
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
          helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
        ></TextField>
        <Button onClick={enviarReview} variant="contained" color="default">
          Enviar
        </Button>
      </Container>
    </div>
  ); */
};

export default MakeReview;
