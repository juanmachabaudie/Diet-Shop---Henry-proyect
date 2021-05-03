import React, { useContext, useEffect } from "react";
import "./Style.css";
import Product from "./product/Product.jsx";
import Loading from "../../assets/loading.gif";
import { useSelector } from "react-redux";
import useStyles from "./Styles.js";
import { useLocation } from "react-router";
import ProductsContext from "../../context/Products/ProductsContext";


function Products() {
  const Classes = useStyles();
  const location = useLocation();
  const allProducts = useSelector((state) => state.products.all);
  const searchResults = useSelector((state) => state.products.searchResults);
  const loading = useSelector((state) => state.loading);
  const { filtered } = useContext(ProductsContext);

  useEffect(() => {}, [location.pathname, loading, filtered]);

  const Products = () => {
    if (filtered) return filtered;
    if (location.pathname === "/products/search") return searchResults;

    return allProducts;
  };
  return (
    <main className={Classes.content}>
      {loading ? (
        <img src={Loading} alt="loading" style={{ justifySelf: "center" }} />
      ) : (
        <div className="Container" justify="center">
          {Products().map((product) => {
            return (
              <div key={product.id} style={{ paddingBottom: "11px" }}>
                <Product product={product} />            
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

export default Products;
