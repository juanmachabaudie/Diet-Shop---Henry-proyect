import { useSelector } from "react-redux";
import defaultImg from '../imgs/default.svg'

export default function ProductDetail() {

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
