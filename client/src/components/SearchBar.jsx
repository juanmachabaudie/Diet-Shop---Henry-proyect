import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions/catalogueAction";
import { useHistory, Link } from "react-router-dom";

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
    history.push("/catalogue/");
    setProduct("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <th>
            <input
              className="form-control mr-sm-2"
              aria-label="Search"
              type="text"
              placeholder="Buscar..."
              autoComplete="on"
              value={product}
              onChange={(event) => handleChange(event)}
            />
          </th>
          <th>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <i class="fa fa-search"></i>
            </button>
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
