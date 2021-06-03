import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchProducts } from "../redux/actions/productActions";
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

  const [product, setProduct] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  function handleChange(event) {
    event.preventDefault();
    setProduct(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (product === "") {
      return;
    }
    dispatch(searchProducts(product));
    history.push(`/products/search?name=${product}`);
    setProduct("");
  }

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        onChange={(event) => handleChange(event)}
        id="free-solo-demo"
        freeSolo
        options={products.map((option) => option.name)}
        renderInput={(params) => (
          <InputAdornment position="end">
              <FontAwesomeIcon icon={faSearch} color="#404040" />
              <TextField {...params} label="Buscar..." variant="outlined" />
          </InputAdornment>
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
