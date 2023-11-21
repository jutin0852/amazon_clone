import React from "react";
import { useCartId } from "../components/cartContext";
import { products } from "../components/allProducts";
import "../styles/cartPage.scss";
import { Outlet, NavLink } from "react-router-dom";
import CartItem from "../components/cartItem";

export default function CartPage() {
  // cart items is the main array that is mapped display the all items in the cart
  const cartItems = useCartId();

  let productPrice = cartItems
    .filter((product) => product.checked)
    .map((product) => product.price * product.qty);
  let subTotal = productPrice.reduce((sum, current) => sum + current, 0);

  // console.log(cartItems, subTotal);

  return (
    <div className="cart-page">
      <div className="cart">
        {cartItems.length !== 0 ? (
          <div className="item-in-cart">
            <h2>Shopping Cart</h2>

            {cartItems.map((items, index) => (
              <CartItem key={index} cartItem={items} />
            ))}

            <div className="subtotal">
              {subTotal === 0 ? (
                <p>No item selected</p>
              ) : (
                <p>
                  Subtotal({productPrice.length} items): <b>${subTotal}</b>
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <h2>Your Amazon Cart is empty</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              groceries, clothing, household supplies, electronics, and more.
            </p>
            <p>
              Continue shopping on the Amazon.com homepage, learn about today's
              deals, or visit your Wish List.
            </p>
          </div>
        )}
        {/* <div className="your-items">
          <h2>Your Items</h2>
          <div className="item-options">
            <div className="item-option-name">
              <nav>
                <NavLink to="saved">No items saved for later</NavLink>
                <NavLink to="buyItLater">Buy it again</NavLink>
              </nav>
            </div>
          </div>
        </div> */}
      </div>
      <div className="items-subtotal">
        {subTotal === 0 ? (
          <p>No item selected</p>
        ) : (
          <p>
            Subtotal({productPrice.length} items):<b>${subTotal}</b>
          </p>
        )}
      </div>
    </div>
  );
}
