import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div>
      <div>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`product/detail/${item.uuid}`}>
        <p>{item.name}</p>
      </Link>
      <p>${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.uuid, e.target.value)}
      >
        {[...Array(item.stock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button onClick={() => removeHandler(item.product)}>borrar</button>
    </div>
  );
};

export default CartItem;
