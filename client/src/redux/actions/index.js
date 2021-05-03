//type names

import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAIL,
  POST_PRODUCT,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_FAIL,
  GET_ALL_PRODUCT,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  PUT_PRODUCT,
  PUT_PRODUCT_SUCCESS,
  PUT_PRODUCT_FAIL,
} from "../constants/FormConstants";
import {
  AUTHENTICATED_USER,
  UNAUTHENTICATED_USER,
} from "../constants/UserConstants"
import {
  POST_CATEGORIES,
  POST_CATEGORIES_SUCCESS,
  POST_CATEGORIES_FAIL,
} from "../constants/FormConstants";
import {
  PUT_CATEGORIES,
  PUT_CATEGORIES_SUCCESS,
  PUT_CATEGORIES_FAIL,
} from "../constants/FormConstants";
import {
  DELETE_CATEGORIES,
  DELETE_CATEGORIES_SUCCESS,
  DELETE_CATEGORIES_FAIL,
} from "../constants/FormConstants";
import { COMPLETE, EMPTY_POST, EMPTY_PUT } from "../constants/FormConstants";
import {
  COMPLETE_PRODUCT,
  EMPTY_POST_PRODUCT,
  EMPTY_PUT_PRODUCT,
} from "../constants/FormConstants";
import {
  URL_BACK_PRODUCTS,
  URL_BACK_SEARCH,
} from "../../auxiliar/constants/constants.js";
export const FILTER = "FILTER";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const LOADING_PRODUCTS = "LOADING_PRODUCTS";
export const GET_ORDERS = "GET_ORDERS";
export const SET_FAVS = "SET_FAVS";

//actions

export function successSetProducts(payload) {
  return {
    type: SET_PRODUCTS,
    payload,
  };
}

export function loadingProducts() {
  return {
    type: LOADING_PRODUCTS,
  };
}

export function setProducts() {
  return async (dispatch) => {
    await dispatch(loadingProducts());
    await fetch(`${URL_BACK_PRODUCTS}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch(successSetProducts(data));
      });
  };
}

export function successSetSearchResults(payload) {
  return {
    type: SET_SEARCH_RESULTS,
    payload,
  };
}

export function setSearchResults(input) {
  return (dispatch) => {
    fetch(URL_BACK_SEARCH + input)
      .then((r) => r.json())
      .then((data) => {
        dispatch(successSetSearchResults(data));
      });
  };
}

export const getCategories = () => (dispatch) => {
  dispatch({ type: GET_ALL_CATEGORIES });
  fetch("http://localhost:3001/categories")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: GET_ALL_CATEGORIES_FAIL, payload: err });
    });
};

export const postCategories = (payload) => (dispatch) => {
  dispatch({ type: POST_CATEGORIES });
  fetch("http://localhost:3001/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: payload }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({ type: POST_CATEGORIES_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: POST_CATEGORIES_FAIL, payload: err });
    });
};

export const putCategories = (payload) => (dispatch) => {
  dispatch({ type: PUT_CATEGORIES });
  fetch(`http://localhost:3001/categories/${payload.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: payload.name }),
  }).then(
    (res) => {
      dispatch({ type: PUT_CATEGORIES_SUCCESS, payload: res });
    },
    (err) => {
      dispatch({ type: PUT_CATEGORIES_FAIL, payload: err });
    }
  );
};
export const deleteCategories = (payload) => (dispatch) => {
  dispatch({ type: DELETE_CATEGORIES });
  fetch(`http://localhost:3001/categories/${payload}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(
    (res) => {
      dispatch({ type: DELETE_CATEGORIES_SUCCESS, payload: res });
    },
    (err) => {
      dispatch({ type: DELETE_CATEGORIES_FAIL, payload: err });
    }
  );
};

export const flowRender = (payload) => (dispatch) => {
  if (payload === "editForm") {
    dispatch({ type: COMPLETE });
  }
  if (payload === "dashboardPost") {
    dispatch({ type: EMPTY_POST });
  }
  if (payload === "dashboardPut") {
    dispatch({ type: EMPTY_PUT });
  }
  if (payload === "editFormProduct") {
    dispatch({ type: COMPLETE_PRODUCT });
  }
  if (payload === "dashboardPostForm") {
    dispatch({ type: EMPTY_POST_PRODUCT });
  }
  if (payload === "dashboardPutForm") {
    dispatch({ type: EMPTY_PUT_PRODUCT });
  }
};

export const getProduct = () => (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCT });
  fetch("http://localhost:3001/products")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({ type: GET_ALL_PRODUCT_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: GET_ALL_PRODUCT_FAIL, payload: err });
    });
};

export const postProduct = (payload) => (dispatch) => {
  dispatch(loadingProducts());
  dispatch({ type: POST_PRODUCT });
  let categoriesArray = [];
  categoriesArray = Object.values(payload.categories);
  fetch("http://localhost:3001/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      description: payload.description,
      price: payload.price,
      image: payload.image,
      stock: payload.stock,
      categories: categoriesArray,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS, payload: res });
    })
    .catch((err) => {
      dispatch({ type: POST_PRODUCT_FAIL, payload: err });
    });
};

export const deleteProduct = (payload) => (dispatch) => {
  dispatch({ type: DELETE_PRODUCT });
  fetch(`http://localhost:3001/products/${payload}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(
    (res) => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: res });
    },
    (err) => {
      dispatch({ type: DELETE_PRODUCT_FAIL, payload: err });
    }
  );
};
export const putProduct = (payload) => (dispatch) => {
  dispatch({ type: PUT_PRODUCT });
  let categoriesArray = [];
  categoriesArray = Object.values(payload.form.categories);
  fetch(`http://localhost:3001/products/${payload.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.form.name,
      description: payload.form.description,
      price: payload.form.price,
      image: payload.form.image,
      stock: payload.form.stock,
      categories: categoriesArray,
    }),
  }).then(
    (res) => {
      dispatch({ type: PUT_PRODUCT_SUCCESS, payload: res });
    },
    (err) => {
      dispatch({ type: PUT_PRODUCT_FAIL, payload: err });
    }
  );
};

export const getOrders = () => (dispatch) => {
  dispatch({ type: GET_ORDERS });
  fetch("http://localhost:3001/cart/orders")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({ type: GET_ORDERS, payload: res });
    });
};

export const getOrderById = (orderId) => (dispatch) => {
  dispatch({ type: GET_ORDERS });
  fetch("http://localhost:3001/cart/orders/" + orderId)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({ type: GET_ORDERS, payload: [res] });
    });
};

export const getOrdersByStatus = (status) => (dispatch) => {
  dispatch({ type: GET_ORDERS });
  fetch("http://localhost:3001/cart/orders?status=" + status)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({ type: GET_ORDERS, payload: res });
    });
};

export const authenticatedUser = (payload={id:"GUEST"})=>(dispatch)=>{
    dispatch({ type: AUTHENTICATED_USER , payload}) 
};

export const setFavs = (payload) => {
  return {
    type: SET_FAVS,
    payload
  }
}