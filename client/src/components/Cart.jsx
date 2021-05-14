import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "./CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();

  const cartInLocalStorage = useSelector((state) => state.cartInLocalStorage);

  useEffect(() => {}, []);

  const qtyChangeHandler = (uuid, qty) => {
    dispatch(addToCart(uuid, qty));
  };

  const removeFromCartHandler = (uuid) => {
    dispatch(removeFromCart(uuid));
  };

  const getCartCount = () => {
    return cartInLocalStorage.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartInLocalStorage
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <>
      <div>
        <div>
          <h2>Shopping Cart</h2>

          {cartInLocalStorage.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartInLocalStorage.map((item) => (
              <CartItem
                key={item.uuid}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
