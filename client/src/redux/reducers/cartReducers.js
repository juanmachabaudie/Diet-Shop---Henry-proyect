import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_RESET,
} from "../actions/cartActions";

const initialState = {
  cartItems: [],
};

export default function cartReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const itemFound = state.cartItems.find((i) => i.uuid === item.uuid);

      if (itemFound) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.uuid === itemFound.uuid ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((e) => e.uuid !== action.payload),
      };
    case CART_RESET:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
}
