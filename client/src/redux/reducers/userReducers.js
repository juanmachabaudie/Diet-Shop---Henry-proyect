const initialState={
    message:{}
}

export default function productReducers(state = initialState, action) {
    switch (action.type) {
      case "ADD_USER":
        return {
          ...state,
          message: action.payload,
        };
        case "RESET_PASSWORD":
          return{
            ...state,
            message: action.payload,
          }
      default:
        return state;
    }
  }
  