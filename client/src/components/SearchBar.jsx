import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [product, setProduct] = useState("");

  function handleChange(e) {
    setProduct(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProduct("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            aria-label="Search"
            type="text"
            placeholder="Search"
            autoComplete="on"
            value={product}
            onChange={(event) => handleChange(event)}
          />
          <Link to={"/" + product}>
            <button 
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit">
                 Search
            </button>
          </Link>
      </form>
    </div>
  );
}

function handleSubmit(e){
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
}

