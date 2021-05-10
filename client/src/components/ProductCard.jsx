import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { findProduct } from "../redux/actions/catalogueAction";
import "./product.css";
import "./productCard.css";

export default function ProductCard({
  id,
  name,
  description,
  image,
  price,
  stock,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(id);
  function handleClick() {
    dispatch(findProduct(id));
    history.push("/product/detail/" + id);
  }

  return (
    <div className="card" id="product">
      <img class="card-img-top" class="img" src={image} alt="Card image cap" />
      <div class="card-body">
        <p className="card-text" class="n">
          {name}
        </p>
        <p className="card-text" class="n">
          {description}
        </p>
        <p className="card-text" class="n">
          {price}
        </p>
        <p className="card-text" class="n">
          {stock}
        </p>
      </div>
      <button value={id} onClick={handleClick}>
        Detalle
      </button>
    </div>
  );
}
