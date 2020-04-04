import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CHART:
      return {
        ...state,
        //filter vraca sve sto je true
        //ovde kaze da ako se id koji hocemo da vratimo ne poklapa sa id koji hocemo da filterujemo onda vrati true
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
