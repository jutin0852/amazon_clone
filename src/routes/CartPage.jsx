import React from "react";
import { useCartDispatch, useCartId } from "../components/cartContext";
import { products } from "../components/allProducts";
import "../styles/cartPage.scss";
import { Outlet, Link, NavLink } from "react-router-dom";
import CartItem from "../components/cartItem";

export default function CartPage() {
  const cartItems = useCartId();
  const cartproducts = cartItems.map((cartid) =>
    products.find((product) => product.productId === cartid)
  );

  console.log(cartproducts, cartItems);
  return (
    <div className="cart-page">
      <div className="cart">
        {cartproducts.length !== 0 ? (
          <div className="item-in-cart">
            <h2>Shopping Cart</h2>
            {cartproducts.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
            <p className="subtotal">
              Subtotal({cartproducts.length} items): <b>$44</b>
            </p>
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
        <div className="your-items">
          <h2>Your Items</h2>
          <div className="item-options">
            <div className="item-option-name">
              <nav>
                <NavLink to="saved">No items saved for later</NavLink>
                <NavLink to="buyItLater">Buy it again</NavLink>
              </nav>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      <div className="items-subtotal">
        <p>
          Subtotal({cartproducts.length} items): <b>$44</b>
        </p>
      </div>
    </div>
  );
}
