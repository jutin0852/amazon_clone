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
    return [...cart, { id: action.id, qty: action.qty, price: action.price }];
  }
  if (action.type === "RemoveFromCart") {
    return cart.filter((item) => item !== action.id);
  }
  if (action.type === "changeQty") {
    return cart.map((item) => {
      if (item.id === action.item.id) {
        return action.item;
      } else {
        return item;
      }
    });
  }
}
