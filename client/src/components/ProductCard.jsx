import React from "react";
import "./product.css";
import "./productCard.css";

export default function ProductCard({
  name,
  description,
  image,
  price,
  stock,
}) {
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
      </div>
    </div>
  );
}
