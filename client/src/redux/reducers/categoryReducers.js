const initialState = {
  categories: [],
  response: {},
  success: {},
  error: "",
  change: false,
};

export default function categoryReducers(state = initialState, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
        change: false,
      };

    case "GET_CATEGORY_BY_NAME":
      return {
        ...state,
        categories: action.payload,
      };

    case "ADD_CATEGORY":
      return {
        ...state,
        success: action.payload,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
      };

    case "DELETE_SUCCESS":
      return {
        ...state,
        success: {},
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "DELETE_ERROR":
      return {
        ...state,
        error: "",
      };

    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(cate => cate.uuid !== action.payload.uuid),
        chage: true,
      };
    default:
      return state;
  }
}
