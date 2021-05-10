import {
  GET_CATALOGUE,
  SEARCH_PRODUCTS,
  FILTER_BY_CATEGORY,
  GET_PRODUCT,
} from "../actions/catalogueAction";

const initialState = {
  products: [], //aca van los productos
  loading: false,
  searchProducts: [], //aca van los productos que buscamos por el searchBar
  filterByCategory: [], //filtrado de productos por categories
  product: [],
};

export default function catalogueReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATALOGUE:
      return {
        ...state,
        products: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchProducts: action.payload,
      };
    case "LOADED":
      return {
        ...state,
        loading: false,
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filterByCategory: action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
}
