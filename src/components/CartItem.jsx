import React from "react";
import "../styles/cartItem.scss";

import DropDown from "./DropDown";
import { useCartDispatch } from "./cartContext";

export default function CartItem({ item}) {
  const dispatch = useCartDispatch()

  return (
    <div className="cart-item">
      <input type="checkbox" />
      <div className="cart-item-img">
        <img src={item.productImgs.cartImg} alt="" />
      </div>
      <div>
        <p className="item-name">{item.productName}</p>
        <h3>{item.pricing.price}</h3>
        <p>size: {item.pack}</p>
        <div className="cart-item-options">
          <DropDown options={[1, 2, 3]} sort={`qty:`} />
          <span
            onClick={() => {
              dispatch({
                type: "RemoveFromCart",
                id: item.productId,
              });
            }}
          >
            delete
          </span>
  
        </div>
      </div>
    </div>
  );
}
