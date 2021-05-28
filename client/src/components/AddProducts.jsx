import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createProduct } from "../redux/actions/productActions.js";
import { getCategories } from "../redux/actions/categoryActions";
import UploadButton from "./UploadButton";
import {
  Box,
  Button,
  Grid,
  FormControlLabel,
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

  const categories = store.categories.categories;
  const loading = store.products.loading;
  const agregado = store.products.message;

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [datos, setDatos] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    categories: [],
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleCat = (event) => {
    event.preventDefault();
    const options = event.target.options;
    const seleccionadas = [];
    for (let option of options) {
      if (option.selected) {
        seleccionadas.push(option.value);
      }
    }
    setDatos({
      ...datos,
      categories: seleccionadas,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    dispatch(createProduct(datos));
  };

  if (loading) {
    return (
      <div>
        <Box justifyContent="center" alignItems="center">
          <Typography variant="h3">Cargando...</Typography>
        </Box>
      </div>
    );
  } else {
    return (
      <Container>
        <div className={classes.offset} />
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Agregar Producto</Typography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField required name="name" label="Nombre" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required name="price" label="Precio" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField required name="Stock" label="Stock" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="categories">Categorias</InputLabel>
              <Select
                labelId="categories"
                id="categories"
                onChange={handleCat}
                name="categories"
                multiple
                required
              >
                {categories?.map((each) => {
                  return (
                    <MenuItem value={each.name} key={each.uuid}>
                      {each.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField name="description" label="Description" fullWidth />
            </Grid>
            <Box m={2}>
              <CardMedia
              // image=/* file.name */
              />
              <UploadButton name={"productos"} />
            </Box>
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
              <label htmlFor="guardar">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FontAwesomeIcon icon={faSave} />}
                  content="span"
                >
                  Guardar
                </Button>
              </label>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

/* 
      <Container>
        <h5 className={classes.title}>AGREGAR PRODUCTO</h5> <hr />
        <form onSubmit={enviarDatos}>
          <div>
            <section>
              <input
                className={classes.input}
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={handleInputChange}
              />
            </section>
            <section>
              <input
                className={classes.input}
                type="text"
                placeholder="Descripción"
                name="descripcion"
                onChange={handleInputChange}
              />
            </section>
            <section>
              <input
                className={classes.input}
                type="number"
                placeholder="$Precio"
                name="price"
                onChange={handleInputChange}
              />
            </section>
            <section>
              <input
                className={classes.input}
                type="number"
                placeholder="Stock"
                name="stock"
                onChange={handleInputChange}
              />
            </section>
          </div>
          <UploadButton name={"productos"} />
          <select
            className={classes.input}
            multiple
            name="categories"
            onChange={handleCat}
            required
          >
            {categories?.map((each) => {
              return (
                <option value={each.name} key={each.uuid}>
                  {each.name}
                </option>
              );
            })}
          </select>{" "}
          <br />
          <input className={classes.input} type="submit" value="Agregar" /> <hr />
          <div>{agregado.message}</div>
        </form>
      </Container> */
