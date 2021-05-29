import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addCategory } from "../redux/actions/categoryActions";
import { getCategories } from "../redux/actions/categoryActions";
import UploadButton from "./UploadButton";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Container,
  InputLabel,
  Select,
  MenuItem,
  CardMedia,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  contain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    display: "none",
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const img = store.images.fireImg;

  useEffect(() => {
    dispatch(getCategories());
    setDatos({
      ...datos,
      image: img,
    });
  }, [dispatch, img]);

  const [datos, setDatos] = useState({
    name: "",
    image: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    console.log(datos);
    event.preventDefault();
    dispatch(addCategory(datos));
  };

  return (
    <Container>
      <div className={classes.offset} />
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6">Agregar Categoria</Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="name"
              label="Categoria"
              fullWidth
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Box m={2}>
              <input
                accept="image/*"
                className={classes.input}
                id="guardar"
                multiple
                type="submit"
              />
              <UploadButton name={"categorias"} />
              <label htmlFor="guardar">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FontAwesomeIcon icon={faSave} />}
                  content="span"
                  onClick={enviarDatos}
                >
                  Guardar
                </Button>
              </label>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
