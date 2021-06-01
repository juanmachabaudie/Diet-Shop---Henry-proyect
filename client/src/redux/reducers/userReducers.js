const initialState = { message: {}, users: [], orders:{}, change: false, shippingData:{} };

export default function productReducers(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER": return { ...state, message: action.payload };
    case "GET_USERS": return { ...state, users: action.payload, change: false };
    case "ADMINS": return { ...state, message: action.payload, change: true };
    case "RESET_PASSWORD": return { ...state, message: action.payload };
    case "GET_ORDERS": return { ...state, orders: action.payload };
    case "GET_SHIPPING": return { ...state, shippingData: action.payload };
    default: return state;
  }
}