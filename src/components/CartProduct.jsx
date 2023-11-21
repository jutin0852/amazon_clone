import React, { useState } from "react";
import "../styles/cartItem.scss";
import { products } from "./allProducts";

import DropDown from "./DropDown";
import { useCartDispatch } from "./cartContext";

export default function CartProduct({ cartItem }) {
  const dispatch = useCartDispatch();
  const [itemQty, setItemQty] = useState(cartItem.qty);

  // item checks the product list to get details of the items in the cart
  let item = products.find((product) => product.productId === cartItem.id);

  return (
    <div className="cart-item">
      <input
        type="checkbox"
        checked={cartItem.checked}
        onChange={() => {
          dispatch({
            type: "editCartItem",
            item: { ...cartItem, checked: !cartItem.checked },
          });
        }}
      />
      <div className="cart-item-img">
        <img src={item.productImgs.cartImg} alt="" />
      </div>
      <div className="cart-item-details">
        <p className="item-name">{item.productName}</p>
        <h3>{item.pricing.price}</h3>
        <p>size: {item.pack}</p>
        <div className="cart-item-options">
          <DropDown
            options={[1, 2, 3, 4, 5]}
            sort={`qty:`}
            itemQty={itemQty}
            setItemQty={setItemQty}
            cartItem={cartItem}
          />
          <span
            onClick={() => {
              console.log(item.productId, cartItem.id);
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
