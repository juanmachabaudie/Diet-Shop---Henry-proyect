import {
  BY_CATEGORY,
  ADD_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY_BY_NAME,
  ERROR,
  DELETE_ERROR,
  SUCCESS,
  DELETE_SUCCESS,
} from "../reducers/categoryReducer";
const axios = require("axios");

// export const GET_CATEGORIES = "GET_CATEGORIES";
// export const BY_CATEGORY = "BY_CATEGORY";

// export function getCategories() {
//   return function (dispatch) {
//     return axios.get("http://localhost:3001/category").then((data) => {
//       dispatch({ type: GET_CATEGORIES, payload: data.data });
//     });
//   };
// }

export function byCategory(name) {
  return function (dispatch) {
    return axios
      .get(" http://localhost:3001/category/search?name=" + name)
      .then((data) => {
        dispatch({ type: BY_CATEGORY, payload: data.data });
      });
  };
}

export const deleteError = () => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_ERROR,
    });
  };
};

export const deleteSuccess = () => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_SUCCESS,
    });
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    let categories;

    try {
      const result = await fetch(`http://localhost:3001/category/`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });

      categories = await result.json();

      await dispatch({
        type: GET_CATEGORIES,
        payload: categories,
      });
    } catch (error) {
      await dispatch({
        type: ERROR,
        payload: categories,
      });

      return { error: error };
    }
  };
};

export const getCategoryByName = (name) => {
  return async (dispatch) => {
    let categoryByName = [];

    try {
      let result = await fetch(
        `http://localhost:3001/category/byName?name=${name}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      );

      categoryByName = await result.json();
      if (!categoryByName.error) {
        await dispatch({
          type: GET_CATEGORY_BY_NAME,
          payload: categoryByName,
        });
      }
    } catch (error) {
      await dispatch({
        type: ERROR,
        payload: categoryByName,
      });
      return { error: error };
    }
  };
};

export const addCategory = (category) => {
  return async (dispatch) => {
    let json;
    try {
      const result = await fetch("http://localhost:3001/category/create", {
        method: "POST",
        body: JSON.stringify(category),
        mode: "cors",
        headers: { "Content-type": "application/json" },
      });

      json = await result.json();

      if (json.error) {
        return await dispatch({
          type: ERROR,
          payload: json,
        });
      }

      await dispatch({
        type: SUCCESS,
        payload: json,
      });

      await dispatch({
        type: ADD_CATEGORY,
        payload: json,
      });

      await getCategories()(dispatch);
    } catch (error) {
      return { error: error };
    }
  };
};
