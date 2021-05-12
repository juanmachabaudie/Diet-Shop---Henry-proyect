import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchProducts } from "../redux/actions/productActions";

export default function SearchBar() {
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
    history.push("/products/search?name=" + product);
    setProduct("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <th>
            <input
              type="text"
              placeholder="Buscar..."
              autoComplete="on"
              value={product}
              onChange={(event) => handleChange(event)}
            />
          </th>
          <th>
            <button type="submit">Buscar</button>
          </th>
        </table>
      </form>
    </div>
  );
}

/* function handleSubmit(e){
    e.preventDefault()
    setProduct('');
}
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <nav> 
          
                 <input
                  className="form-control mr-sm-2"
                  aria-label="Search"
                   type="text"
                   placeholder='que estas buscando?'
                   autoComplete="on"
                   value={product}
                  onChange={(event) => handleChange(event)}
                 />
                 <button type="submit">
                     <Link to={'/search?name=' + product}>
                     buscar
                     </Link>
                     
                </button>
            </nav> 
         </form>
     </div>
    )
} */
