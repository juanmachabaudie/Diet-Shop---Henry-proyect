import axios from "axios";
import { sweetAlert } from "../../helpers/utils";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_RESET = "CART_RESET";
export const CHANGE_PRODUCT_QTY = "CHANGE_PRODUCT_QTY";
export const SET_CART_RELOAD = 'SET_CART_RELOAD';

export const addToCart = (uuid, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:3001/product/detail/${uuid}`);
  let old = await JSON.parse(localStorage.getItem("cart"));
  for (let prod of old) {
    if (prod.uuid === uuid) {
      if (quantity > 0) {
        quantity = ++prod.quantity
      } else {
        quantity = --prod.quantity
      }
    }
  }

  dispatch({
    type: ADD_TO_CART,
    payload: {
      uuid: data.uuid,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      quantity,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const setCartReload = (local = JSON.parse(localStorage.getItem("cart"))) => (dispatch) => {
  console.log(local)
  dispatch({
    type: SET_CART_RELOAD,
    payload: local
  })
}

export const removeFromCart = (uuid) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: uuid,
  });
  sweetAlert("Eliminado", "success", "OK", 1000);
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const cartReset = () => (dispatch, getState) => {
  dispatch({
    type: CART_RESET,
    payload: [],
  });
  sweetAlert("Vaciado", "success", "OK", 1000);
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const changeProductQuantity = (productId, qty) => (dispatch, getState) => {
  dispatch({
    type: CHANGE_PRODUCT_QTY,
    payload: { productId: productId, qty: qty },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
