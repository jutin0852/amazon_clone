import React from "react";
import "../styles/ProductInList.scss";
import { Link } from "react-router-dom";

function ProductInList({product}) {
  const {productImgs , productName , pack , sold, price , pricing} = product;
  return (
    <div className="product-in-list">
      <div className="product-image">
        <Link to={`/${product.productName}`}>
          <img src={productImgs.displayImg} alt="" />
        </Link>
      </div>
      <div className="product-in-list-details">
        <p className="product-name">
          <Link>{productName}</Link>
        </p>
        <span className="pack">{pack}</span>
        {/* <p>36,112</p> */}
        <p className="quantity">{sold}</p>
        <div className="price-details">
          <span>
            <span className="dollar">$</span>
            <h3 className="price">{price}</h3>
            <span className="nine-nine">99</span>
          </span>
          <span>{pricing.per} </span>
          <span className="count">
            <span>{pricing.type}</span> : <strike>{pricing.typePrice}</strike>
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
