
import { sweetAlert } from "../../helpers/utils";


export const getCategories = () => {
  return async (dispatch) => {
    let categories;
    try {
      const result = await fetch(`http://localhost:3001/category/`);
      categories = await result.json();
      dispatch({
        type: "GET_CATEGORIES",
        payload: categories,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
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
        `http://localhost:3001/category/byName?name=${name}`
      );
      categoryByName = await result.json();
      if (!categoryByName.error) {
        await dispatch({
          type: "GET_CATEGORY_BY_NAME",
          payload: categoryByName,
        });
      }
    } catch (error) {
      await dispatch({
        type: "ERROR",
        payload: categoryByName,
      });
      return { error: error };
    }
  };
};

export const addCategory = (category) => {
  return async (dispatch) => {
    try {
      const result = await fetch("http://localhost:3001/category/create", {
        method: "POST",
        body: JSON.stringify(category),
        mode: "cors",
        headers: { "Content-type": "application/json" },
      });

      let json = await result.json();

      if (json?.error) {
        return sweetAlert(json?.error);
      }
      await dispatch({
        type: "ADD_CATEGORY",
        payload: json,
      });
      await dispatch({
        type: "SUCCESS",
        payload: json,
      });
      sweetAlert(
        "Info",
        json.message,
        "success",
        "OK"
      );
            
      await getCategories()(dispatch);
    } catch (error) {
      return { error: error };
    }
  };
};

export const deleteError = () => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_ERROR",
    });
  };
};

export const deleteSuccess = () => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_SUCCESS",
    });
  };
};

