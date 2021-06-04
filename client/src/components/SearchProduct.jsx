import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}))

const SearchProducts = () => {
  const classes = useStyles()
  const searchProducts = useSelector((store) => store.products.search);

  return searchProducts.map((e) => {
    return (
      <>
      <div className={classes.offset}/>
      <ProductCard
        key={e.uuid}
        uuid={e.uuid}
        name={e.name}
        description={e.description}
        image={e.image}
        price={e.price}
        stock={e.stock}
      />
      </>
    );
  });
};

export default SearchProducts;
