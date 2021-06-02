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
      Container
      maxWidth="lg"
      // style={{
      //   borderColor: "#c8e7c9",
      // }}
      alignItems="center"
      justifyContent="center"
      // className={classes.container}
    >
      <Box
        // bgcolor="primary.main"
        className={classes.container}
        // border={1}
        borderRadius={15}
        // borderColor="Gray.200"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Typography align="center" variant="h6" color="primary">
            Modificar Producto
          </Typography>
        </Grid>

        <form onSubmit={enviarDatos}>
          <div>
            <section>
              <TextField
                className={classes.input}
                id="product"
                label="Producto"
                value={datos.name}
                onChange={handleInputChange}
                variant="outlined"
              />
            </section>
            <section>
              <TextField
                className={classes.input}
                type="text"
                placeholder="Descripción"
                name="descripcion"
                onChange={handleInputChange}
                variant="outlined"
              />
            </section>
            <section>
              <TextField
                className={classes.input}
                id="price"
                label="Precio"
                value={datos.price}
                onChange={handleInputChange}
                variant="outlined"
              />
            </section>
            <section>
              <TextField
                className={classes.input}
                id="outlined-name"
                label="Confirmar Contraseña"
                value={datos.confirmPassword}
                onChange={handleInputChange}
                variant="outlined"
              />
            </section>
          </div>
          <div className={classes.input}>
            <Grid item xs={12}>
              <Grid item xs={12} sm={12} md={12} alignContent="center">
                <TextField
                  className={classes.input}
                  id="stock"
                  label="Stock"
                  value={datos.stock}
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </div>

          <br />
          {/* <TextField className={classes.input} type="submit" value="Agregar" /> */}
          <Box textAlign="center">
            <Button
              variant="outlined"
              color="primary"
              value="Agregar"
              type="submit"
              size="large"
            >
              Modificar
            </Button>
          </Box>
          <hr />
        </form>
      </Box>
    </Grid>
  );
}
