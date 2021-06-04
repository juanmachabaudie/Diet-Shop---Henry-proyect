import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
// import { getProducts } from "../redux/actions/productActions";
import { Box, Grid, Typography, makeStyles} from "@material-ui/core";
import Categories from "./Categories";


const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}))

export default function Products() {

  const classes = useStyles();


  const products = useSelector((store) => store.products.products);
  const change = useSelector(store => store.categories.change)

  useEffect(() => { 

  },[products,change])

  if(!products[0]){
    return (
      <div>SIN PRODUCTOS</div>
    )
  }

  let renderProducts = [];
  !products? (
    <Typography variant="h4" justifyContent="center">
      No se encontraron Productos en esta Categoria
    </Typography>
  ) : (
    (renderProducts = products?.map((e) => {
      return (
        <Grid item xs={12} md={6} lg={4}>
          <Box m={2}>
            <ProductCard
              key={e.uuid}
              uuid={e.uuid}
              name={e.name}
              description={e.description}
              image={e.image}
              price={e.price}
              stock={e.stock}
            />
          </Box>
        </Grid>
      );
    }))
  );

  return (
    <div>
      <div className={classes.offset}/>
      <Box m={2}>
        <Categories/>
      </Box>
      <Grid container>
        {renderProducts}
      </Grid>
    </div>
  );
}
