import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QTY } from "../types";

export const addItemToCart = (itemId) => ({
  type: ADD_TO_CART,
  payload: itemId,
});

export const removeItemFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const changeQuantity = (itemId, value) => ({
  type: CHANGE_QTY,
  payload: { id: itemId, qty: value },
});
