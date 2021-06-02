import Swal from "sweetalert2";
import { sweetAlert } from "../../helpers/utils";

export const getProducts = () => {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3001/product");
    const data = await res.json();
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };
};

export const createProduct = (datos) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3001/product/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    const resJson = await res.json();
    dispatch({
      type: "POST_PRODUCT",
      payload: resJson,
    });
    sweetAlert(datos.name, "AGREGADO", 'ACEPTAR');
  };
};

export const findProduct = (uuid) => {
  try {
    return async (dispatch) => {
      const res = await fetch(`http://localhost:3001/product/detail/${uuid}`);
      const resJson = await res.json();
      dispatch({
        type: "GET_PRODUCT",
        payload: resJson,
      });
    };
  } catch (error) {
    console.log(error);
  } 
};

export const editProduct = (datos) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3001/product/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    const resJson = await res.json();
    dispatch({
      type: "PUT_PRODUCT",
      payload: resJson,
    });
  };
};

export const filterByCategory = (categoryUuid) => async (dispatch) => {
  try {
    const res = await fetch(
      `http://localhost:3001/product/filterByCategory?uuid=${categoryUuid}`
    );
    const resJson = await res.json();
    dispatch({
      type: "GET_PRODUCTS",
      payload: resJson,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchProducts = (name) => {
  return async (dispatch) => {
    const res = await fetch(
      `http://localhost:3001/product/search?name=${name}`
    );
    const resJson = await res.json();
    dispatch({
      type: "GET_PRODUCTS",
      payload: resJson,
    });
  };
};

export const addReview = (data) => {

  const { userMail, productUuid, text, rating} = data;
  return async (dispatch) => {
    console.log(userMail)
    console.log(productUuid)
    console.log(text)
    console.log(rating)

    const res = await fetch('http://localhost:3001/product/addReview/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userMail, text, productUuid, rating
      }),
      mode: "cors",
    });
    const req = await res.json();
    console.log('respuesta ', req);
    dispatch({
      type: "ADD_REVIEW",
      payload: req,
    });

    Swal.fire(req.message)
    
  };
};


export const reviewsProduct = (productUuid) => {
  return async (dispatch) => {
    const res = await fetch(
      `http://localhost:3001/product/reviews/${productUuid}`
    );
    const req = await res.json();
    console.log(req)
    dispatch({
      type: "GET_REVIEWS_PRODUCT",
      payload: req,
    });
  };
};