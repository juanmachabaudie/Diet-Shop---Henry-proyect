import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { findProduct } from "../redux/actions/productActions";

const defaultImg =
  "https://lh3.googleusercontent.com/proxy/lDX77oEN-GsT0mLlLb6s3Y0sf3-EG9S3dqBV7cOsOrSSJ9_mlEtMb9I-nIj469riZT-Q3EA2N4nP6gzt-iwoSuOR_Fihd8cC";

export default function ProductCard({ uuid, name, description, image, price }) {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClick(e) {
    console.log("from Comp ", e.target.value);
    dispatch(findProduct(e.target.value));
    history.push("/products/detail/" + uuid);
    window.scrollTo(0, 0);
  }

  return (
    <div id="product">
      <img src={image || defaultImg} alt="Sin Imagen" />
      <div>
        <button value={uuid} onClick={handleClick}>
          {name}
        </button>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
