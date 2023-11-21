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
    // to check if item already exists in cart
    if (!cart.find((item) => item.id === action.id)) {
      return [
        ...cart,
        { id: action.id, checked: true, qty: action.qty, price: action.price },
      ];
    } else {
      return cart.map((item) => {
        if (item.id == action.id) {
          return { ...item, qty: item.qty + action.qty };
        } else {
          return item;
        }
      });
    }
  }

  if (action.type === "RemoveFromCart") {
    return cart.filter((item) => item.id !== action.id);
  }

  if (action.type === "editCartItem") {
    return cart.map((item) => {
      if (item.id === action.item.id) {
        return action.item;
      } else {
        return item;
      }
    });
  }
}
