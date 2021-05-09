export const ADD_CATEGORY = "ADD_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_BY_NAME = "GET_CATEGORY_BY_NAME";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const BY_CATEGORY = "BY_CATEGORY";

const initialState = {
  categories: [],
  success: {},
  error: "",
};

const reducerCategory = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case GET_CATEGORY_BY_NAME:
      return {
        ...state,
        categories: action.payload,
      };

    case ADD_CATEGORY:
      return {
        ...state,
        success: action.payload,
      };

    case SUCCESS:
      return {
        ...state,
        success: action.payload,
      };

    case DELETE_SUCCESS:
      return {
        ...state,
        success: {},
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_ERROR:
      return {
        ...state,
        error: "",
      };

    default:
      return state;
  }
};

export default reducerCategory;
