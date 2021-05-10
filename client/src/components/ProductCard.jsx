import React from "react";
import {Link} from 'react-router-dom'
import "./product.css";
import "./productCard.css";

const defaultImg = "https://lh3.googleusercontent.com/proxy/lDX77oEN-GsT0mLlLb6s3Y0sf3-EG9S3dqBV7cOsOrSSJ9_mlEtMb9I-nIj469riZT-Q3EA2N4nP6gzt-iwoSuOR_Fihd8cC"

export default function ProductCard({
  productId,
  name,
  description,
  image,
  price,
}) {
  return (
     
      <div className="card" id="product">
        <img class="card-img-top" class="img" src={image || defaultImg} alt="Card image cap" />
        <div class="card-body">
        <Link to={`/detail/${productId}`}>
          <p className="card-text" class="n">
            {name}
          </p>
          </Link>
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
