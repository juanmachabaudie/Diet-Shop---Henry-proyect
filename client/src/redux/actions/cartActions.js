import axios from "axios";
import { sweetAlert } from "../../helpers/utils";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CART_RESET = "CART_RESET";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      qty,
    },
  });
  sweetAlert("Agregado", "success", "OK", 1000);
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

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

/* export const changeProductQuantity = (id, quantity) => dispatch => {
    if(!userId) {
        const productsInCart = JSON.parse(localStorage.getItem('cart') || '[]').map(product => {
            if(product.id === id) return {...product, quantity: quantity };
            return product;
        });
        localStorage.setItem('cart', JSON.stringify(productsInCart));
        return;
    };
    return axios.put(`http://localhost:xxxx/api/user/${userId}/cart`, { id, quantity })
        .then(() => dispatch({ type: CHANGE_PRODUCT_QUANTITY, payload: { id, quantity }}))
        .catch(err => console.error(err));
}; */
