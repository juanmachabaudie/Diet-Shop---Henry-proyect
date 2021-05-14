import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ProductDetail() {
  const defaultImg =
    "https://lh3.googleusercontent.com/proxy/lDX77oEN-GsT0mLlLb6s3Y0sf3-EG9S3dqBV7cOsOrSSJ9_mlEtMb9I-nIj469riZT-Q3EA2N4nP6gzt-iwoSuOR_Fihd8cC";
  //const dispatch = useDispatch()
  const detail = useSelector((store) => store.products.product);

  return (
    <div id="product">
      <img src={detail.image || defaultImg} alt="Sin Imagen" />
      <div>
        <h1>{detail.name}</h1>
        <p>{detail.description}</p>
        <p>{detail.price}</p>
        <p>{detail.categories?.map((category)=>{
          return (
          <p>{category}</p>
          )})}</p>
        <button value={detail.uuid}>COMPRAR</button>
      </div>
    </div>
  );
}
