const axios = require("axios");

export const GET_CATALOGUE = "GET_CATALOGUE";

export function getCatalogue() {
  return function (dispatch) {
    return axios.get("http://localhost:3001/products").then((data) => {
      dispatch({ type: GET_CATALOGUE, payload: data });
    });
  };
}
