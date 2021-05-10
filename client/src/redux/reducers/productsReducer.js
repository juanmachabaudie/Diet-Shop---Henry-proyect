const initialState = {
  products: [],
  productDetail: {},
  categories: [],
  loading: false,
  message: {},
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    case "POST_PRODUCT":
      return {
        ...state,
        message: action.payload,
      };

    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.payload
      }

    default:
      return state;
  }
}
