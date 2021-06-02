import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Container, Button, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { addReview } from "../redux/actions/productActions";
import {decodeToken} from "../helpers/utils.jsx";
import FavoriteIcon from "@material-ui/icons/Favorite";

const MakeReview = ({ productUuid }) => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.products.message);

  const CHARACTER_LIMIT = 200;
  const [values, setValues] = useState({
    name: "",
  });

  const [rating, setRating] = useState(0);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const enviarReview = () => {
    const userEmail = decodeToken();
    let reviewData={
      userMail: userEmail,
      productUuid,
      rating,
      text: values,
    }
    dispatch(addReview(reviewData))
  };

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
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
            icon={<FavoriteIcon fontSize="inherit" />}
          />
        </Box>
        <Button onClick={enviarReview} variant="contained" color="default">
          Enviar
        </Button>
      </Container>
    </div>
  );
};

export default MakeReview;
