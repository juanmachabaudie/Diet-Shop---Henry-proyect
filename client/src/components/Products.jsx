import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { getProducts } from "../redux/actions/productActions";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products.products);

  useEffect(() => {

    if(!products.length){
    dispatch(getProducts());
  }
  }, [dispatch]);

  //const product= products.map(e => e.name
  //aca tengo que iterar, y mandale a product card por props la data y desde product card
  // al hacer click al nombre, mandar el /detail para ver en detalle mas la informacion
  // del producto
  let renderProducts = [];
  if (products.message) {
    renderProducts = <h1>No se encontraron Productos en esta Categoria</h1>;
  } else {
    renderProducts = products.map((e) => {
      return (
        <ProductCard
          uuid={e.uuid}
          name={e.name}
          description={e.description}
          image={e.image}
          price={e.price}
          stock={e.stock}
        />
      );
    });
  }

  return (
    <div>
      <h1>Products</h1>
      {renderProducts}
    </div>
  );
}
