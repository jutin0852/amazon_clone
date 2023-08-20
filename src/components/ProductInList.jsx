import React from "react";
import "../styles/ProductInList.scss";
import { Link } from "react-router-dom";

function ProductInList() {
  return (
    <div className="product-in-list">
      <div className="product-image">
        <img src="/images/product/shower.webp" alt="" />
      </div>
      <div className="product-in-list-details">
        <p className="product-name">
          <Link>
            Cleverfy Shower Steamers Aromatherapy - Variety Pack of 6 Shower
            Bombs with Essential Oils. Personal Care and Relaxation Birthday
            Gifts for Women and Men. Purple Set 6
          </Link>
        </p>
        <span className="pack">6 Count (Pack of 1)</span>
        {/* <p>36,112</p> */}
        <p className="quantity">4k+ bought in past month</p>
        <div className="price-details">
          <span>
            <span className="dollar">$</span>
            <h3 className="price">11</h3>
            <span className="nine-nine">99</span>
          </span>
          <span>($2.00/Count) </span>
          <span className="count">
            List: <strike>$24.99</strike>
          </span>
          <div className="saving">
            <span className="save">Save 10%</span>
            <span className="coupon">With coupon</span>
          </div>
          <p className="delivery">
            Delivery <strong>Fri, Aug 25</strong>
          </p>
          <p className="ships-to">Ships to Nigeria</p>
          {/* <p>Climate Pledge Friendly</p> */}
        </div>
      </div>
    </div>
  );
}

export default ProductInList;
