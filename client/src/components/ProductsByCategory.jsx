import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/categoryActions";
import { useHistory } from "react-router-dom";
import { getProducts, filterByCategory } from "../redux/actions/productActions";
import {makeStyles, FormControl, InputLabel, Select} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function ProductsByCategory() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector((store) => store.categories.categories);

  let options = [];
  if (categories.length > 0) {
    options = categories.map((e) => (
      <option key={e.uuid} value={e.uuid}>
        {e.name}
      </option>
    ));
  } else {
    <p>No se encontraron Categorias</p>;
  }

  //This is the function that DISPATCHES and d the FILTERS
  function handleChange(e) {
    if (e.target.value === "Categorias") {
      return;
    }
    if (e.target.value === "Todas") {
      dispatch(getProducts());
      history.push("/products");
      window.scrollTo(0, 0);
    } else {
      dispatch(filterByCategory(e.target.value));
      history.push("/products");
      window.scrollTo(0, 0);
    }
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>Categorias</InputLabel>
      <Select
          native
          id="categorias"
          onChange={handleChange}
          defaultValue="categorias"
          label="Categorias"
          inputProps={{
            name: 'categories',
          }}
      >
        <option aria-label="None" value=""/>
        <option value="Todas">Todas</option>
        {options}
      </Select>
    </FormControl>
  );
}

export default ProductsByCategory;

