export const getProducts = () => {
  return function (dispatch) {
    return fetch("/product")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_PRODUCTS", payload: data });
      });
  };
};

export const createProduct = (datos) => {
  return async (dispatch) => {
    const res = await fetch("/product/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    const resJson = await res.json();
    dispatch({
      type: "POST_PRODUCT",
      payload: resJson,
    });
  };
};

export const findProduct = (uuid) => {
  console.log(uuid);
  try {
    return async (dispatch) => {
      const res = await fetch(`/product/detail/${uuid}`);
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

export const filterByCategory = (categoryUuid) => async (dispatch) => {
  try {
    const res = await fetch(
      `/product/filterByCategory?uuid=${categoryUuid}`
    );
    const resJson = await res.json();
    console.log(resJson);
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
      `/product/search?name=${name}`
    );
    const resJson = await res.json();
    dispatch({
      type: "GET_PRODUCTS",
      payload: resJson,
    });
  };
};
