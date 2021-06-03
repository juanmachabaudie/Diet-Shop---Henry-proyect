//true retiro en sucursal
//false retiro en dom
const initialState = {
    deliveryType: false,
  };
  
  export default function checkoutReducers(state = initialState, action) {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          deliveryType: action.payload
        };
      default:
        return state;
    }
  }
  