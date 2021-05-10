import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./product.css";
import "./productCard.css";

export default function ProductDetail() {
  //const dispatch = useDispatch();
  const history = useHistory();

  const product = useSelector((store) => store.catalogue.product);
  console.log(product);

  let detail;
  if (product.length > 0) {
    detail = (
      <div className="card" id="product">
        <img
          class="card-img-top"
          class="img"
          src={product[0].image}
          alt="Card image cap"
        />
        <div class="card-body">
          <p className="card-text" class="n">
            {product[0].name}
          </p>
          <p className="card-text" class="n">
            {product[0].description}
          </p>
          <p className="card-text" class="n">
            {product[0].price}
          </p>
          <p className="card-text" class="n">
            {product[0].stock}
          </p>
        </div>
        <button onClick={handleClick}>X</button>
      </div>
    );
  } else {
    detail = <div>Not Found</div>;
  }
  function handleClick() {
    history.push("/catalogue");
  }

  return <div>{detail}</div>;
}
