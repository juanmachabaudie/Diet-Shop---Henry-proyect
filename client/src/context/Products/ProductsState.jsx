import React, { useState } from "react";
import ProductsContext from "./ProductsContext";

const ProductState = (props) => {
  const [filtered, setFiltered] = useState("");
  const [product, setProduct] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <ProductsContext.Provider
      value={{
        filtered,
        product,
        cartCount,
        total,
        setFiltered,
        setProduct,
        setCartCount,
        setTotal,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductState;
