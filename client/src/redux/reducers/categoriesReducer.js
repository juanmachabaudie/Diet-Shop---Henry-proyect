import { GET_CATEGORIES, BY_CATEGORY } from "../actions/categoryAction";

const initialState = {
  categories: [],
  byCategory: [],
  loading: false,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case BY_CATEGORY:
      return {
        ...state,
        byCategory: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "LOADED":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
