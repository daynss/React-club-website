import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QTY } from "../types";

const initialState = {
  cartItems: {},
  totalQty: 0,
};

// cartItems :{
//  6: {quantity: 2 },
//  2: {quantity: 1 },
// };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCartItems = {
        ...state.cartItems,
        [action.payload]: {
          quantity: state.cartItems[action.payload]?.quantity + 1 || 1,
        },
      };
      return {
        ...state,
        cartItems: updatedCartItems,
        totalQty: state.totalQty + 1,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: updatedCartItems,
        totalQty: state.totalQty + 1,
      };

    case CHANGE_QTY:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
