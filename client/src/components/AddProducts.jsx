import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createProduct } from "../redux/actions/productActions.js";
import { getCategories } from "../redux/actions/categoryActions";
import makeStyles from "./componentsStyles/AddProductsStyles";
import { Box, Grid, TextField, Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function AddProduct() {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const categories = store.categories.categories;
  const loading = store.products.loading;
  const agregado = store.products.message;

  useEffect(() => {
    dispatch(getCategories());
  }, []);

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
        <h1> LOADING... </h1>
      </div>
    );
  } else {
    return (
      <Grid
        Container
        maxWidth="lg"
        // style={{
        //   borderColor: "#c8e7c9",
        // }}
        alignItems="center"
        justifyContent="center"
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
              AGREGAR PRODUCTO
            </Typography>
          </Grid>

          <form onSubmit={enviarDatos}>
            <div>
              <section>
                <TextField
                  className={classes.input}
                  type="text"
                  placeholder="Nombre"
                  name="name"
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
                  type="number"
                  placeholder="$Precio"
                  name="price"
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </section>
              <section>
                <TextField
                  className={classes.input}
                  type="number"
                  placeholder="Stock"
                  name="stock"
                  onChange={handleInputChange}
                  variant="outlined"
                />
              </section>
            </div>
            <div className={classes.input}>
              <Grid item xs={12}>
                <Grid item xs={12} sm={12} md={12} alignContent="center">
                  <TextField
                    type="file"
                    id="mainPic"
                    name="mainPic"
                    accept="image/jpeg"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </div>
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
            {/* <TextField className={classes.input} type="submit" value="Agregar" /> */}
            <Box textAlign="center">
              <Button
                variant="outlined"
                color="primary"
                value="Agregar"
                type="submit"
                size="large"
              >
                Agregar
              </Button>
            </Box>
            <hr />
            <div>{agregado.message}</div>
          </form>
        </Box>
      </Grid>
    );
  }
}
