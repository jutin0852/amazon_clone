import React, { useState } from "react";
import "../styles/CartItem.scss";
import { products } from "../components/allProducts";

import DropDown from "./DropDown";
import { useCartDispatch } from "./cartContext";

export default function CartItem ({ Item }) {
  const dispatch = useCartDispatch();
  const [itemQty, setItemQty] = useState(Item.qty);

  // item checks the product list to get details of the items in the cart
  let item = products.find((product) => product.productId === Item.id);

  return (
    <div className="cart-item">
      <input
        type="checkbox"
        checked={Item.checked}
        onChange={() => {
          dispatch({
            type: "editItem",
            item: { ...Item, checked: !Item.checked },
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
            Item={Item}
          />
          <span
            onClick={() => {
              console.log(item.productId, Item.id);
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
