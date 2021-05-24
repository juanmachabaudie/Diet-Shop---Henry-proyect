const initialState = {
  products: [],
  product: [],
  productReviews: [],
  productReviewsMsg: {},
  message: {},
};

export default function productReducers(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "POST_PRODUCT":
      return {
        ...state,
        message: action.payload,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: action.payload,
      };
    case "GET_PRODUCT_REVIEWS":
      return {
        ...state,
        productReviews: action.payload,
      };
    case "ADD_REVIEW":
      return {
        ...state,
        productReviewsMsg: action.payload,
      };
    default:
      return state;
  }
}
