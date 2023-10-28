import { createContext, useContext } from "react";

export const cartItemID = createContext("");
export const cartDispatch = createContext("");

export function useCartId() {
  return useContext(cartItemID);
}

export function useCartDispatch() {
  return useContext(cartDispatch);
}

export function CartReducer(cart, action) {
  if (action.type === "addToCart") {
    return [...cart, action.id];
  }
}
