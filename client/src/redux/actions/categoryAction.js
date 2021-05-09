const axios = require("axios");

export const GET_CATEGORIES = "GET_CATEGORIES";
export const BY_CATEGORY = "BY_CATEGORY";

export function getCategories() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/category").then((data) => {
      dispatch({ type: GET_CATEGORIES, payload: data.data });
    });
  };
}

export function byCategory(name) {
  return function (dispatch) {
    return axios
      .get(" http://localhost:3001/category/search?name=" + name)
      .then((data) => {
        dispatch({ type: BY_CATEGORY, payload: data.dataº });
      });
  };
}
