import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_RESET,
  CHANGE_PRODUCT_QTY,
  SET_CART_RELOAD,
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
            i.uuid === itemFound.uuid ? (i = item) : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
      case SET_CART_RELOAD:
        return {
          ...state,
          cartItems: action.payload
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
    case CHANGE_PRODUCT_QTY:
      const { productId, qty } = action.payload;
      console.log(action.payload);
      state.cartItems.forEach((e) =>
        e.uuid === productId ? (e.qty = qty) : e
      );
      return {
        ...state,
        cartItems: state.cartItems,
      };
    default:
      return state;
  }
}
