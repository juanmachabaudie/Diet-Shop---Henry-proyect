import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { getCatalogue } from "../redux/actions/catalogueAction";

export default function Catalog() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.catalogue.products);

  useEffect(() => {
    dispatch(getCatalogue());
  }, [dispatch]);

  //const product= products.map(e => e.name)

  //aca tengo que iterar, y mandale a product card por props la data y desde product card
  // al hacer click al nombre, mandar el /detail para ver en detalle mas la informacion
  // del producto

  return (
    <div>
      {products.map((e) => (
        <ProductCard
          id={e.uuid}
          name={e.name}
          description={e.description}
          image={e.image}
          price={e.price}
          stock={e.stock}
        />
      ))}
    </div>
  );
}
