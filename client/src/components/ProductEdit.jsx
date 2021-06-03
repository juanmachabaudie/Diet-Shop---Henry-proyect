import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../redux/actions/productActions.js";
import { getCategories } from "../redux/actions/categoryActions";
import makeStyles from "./componentsStyles/AddProductsStyles";
import {
  Select,
  TextField,
  Grid,
  Button,
  Typography,
  Box,
} from "@material-ui/core";

export default function ProductEdit(props) {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const categories = store.categories.categories;
  // const modificado = store.products.message;

  const uuid = props.match.params.uuid;

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [datos, setDatos] = useState({
    uuid,
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
    let objDatos = { uuid };
    if (datos.name) {
      objDatos.name = datos.name;
    }
    if (datos.description) {
      objDatos.description = datos.description;
    }
    if (datos.price) {
      objDatos.price = parseInt(datos.price);
    }
    if (datos.stock) {
      objDatos.stock = parseInt(datos.stock);
    }
    if (datos.categories) {
      objDatos.categories = datos.categories;
    }

    dispatch(editProduct(objDatos));
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <form
        // className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={enviarDatos}
      >
        <Grid item>
          <Box Box m={1}>
            <Typography variant="h5" color="primary">
              Modificar Producto
            </Typography>
          </Box>
          <Grid xs={6} md={12}>
            <Box m={1}>
              <TextField
                id="product"
                label="Producto"
                value={datos.name}
                onChange={handleInputChange}
                variant="outlined"
                className={classes.color}
                name="name"
                type="text"
              />
            </Box>
          </Grid>
          <Grid xs={6} md={12}>
            <Box m={1}>
              <TextField
                id="description"
                label="Descripcion"
                value={datos.description}
                onChange={handleInputChange}
                variant="outlined"
                name="description"
                type="text"
              />
            </Box>
          </Grid>

          <Grid xs={6} md={12}>
            <Box m={1}>
              <TextField
                id="price"
                label="Precio"
                value={datos.price}
                onChange={handleInputChange}
                variant="outlined"
                name="price"
                type="number"
              />
            </Box>
          </Grid>
          <Grid xs={6} md={12}>
            <Box m={1}>
              <TextField
                id="stock"
                label="Stock"
                value={datos.stock}
                onChange={handleInputChange}
                variant="outlined"
                name="stock"
                type="number"
              />
            </Box>
          </Grid>
          <Grid xs={6} md={12}>
            <Select
              variant="outlined"
              className={classes.input}
              multiple
              native
              name="categories"
              value={datos.categories}
              onChange={handleCat}
              inputProps={{
                id: "select-multiple-native",
              }}
            >
              {categories?.map((each) => {
                return (
                  <option value={each.name} key={each.uuid}>
                    {each.name}
                  </option>
                );
              })}
            </Select>
          </Grid>

          <Grid xs={6} md={12}>
            <Box m={1} textAlign="center">
              <Button
                size="large"
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
                onClick={enviarDatos}
              >
                Modificar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
