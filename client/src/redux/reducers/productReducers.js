const initialState = {
  products: [],
  product: [],
  message: {},
  update: {},
  reviews: []
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

    case "PUT_PRODUCT":
      return {
        ...state,
        message: action.payload,
    };

    case "ADD_REVIEW":
      return {
        ...state,
        message: action.payload,
     
      };
      
    case "GET_REVIEWS_PRODUCT":
      return {
        ...state,
        reviews: action.payload
      }

    default:
      return state;
  }
}
