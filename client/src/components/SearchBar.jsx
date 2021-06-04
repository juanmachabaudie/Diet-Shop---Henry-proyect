import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchProducts } from "../redux/actions/productActions";
import { getProducts } from "../redux/actions/productActions";
//----------- ↓ Import Styles ↓ -----------
import {
  IconButton,
  Input,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyle = makeStyles();

export default function SearchBar() {
  const products = useSelector((store) => store.products.products);

  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  // const [product, setProduct] = useState("");


  const history = useHistory();

  // function handleChange(event) {
  //   event.preventDefault();
  //   setProduct(event.target.value);
  //   console.log(product);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (product === "") {
  //     return;
  //   }
  //   dispatch(searchProducts(product));
  //   history.push(`/products/search?name=${product}`);
  // }

  // setProduct(newValue);

  if(!products[0]){
    return (
      <div>SIN PRODUCTOS</div>
    )
  }


  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        onChange={(event, product) => {
          if (product === null) {
            history.push(`/products`);
                return;
              }
          dispatch(searchProducts(product));
          history.push(`/products/search?name=${product}`);
        }}
        id="free-solo-demo"
        freeSolo
        options={products?.map((option) => option.name)}
        renderInput={(params) => (
              <TextField {...params} label="Buscar..." variant="outlined" />
        )}
      />
      </div>
  );
}

// <form onSubmit={handleSubmit}>
//   <Input
//     placeholder="Buscar..."
//     onChange={(event) => handleChange(event)}
//     endAdornment={
//       <InputAdornment position="end">
//         <IconButton type="submit">
//           <FontAwesomeIcon icon={faSearch} color="#404040" />
//         </IconButton>
//       </InputAdornment>
//     }
//   />
// </form>
