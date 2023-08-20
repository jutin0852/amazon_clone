import React from "react";
import "../styles/ProductListing.scss";
import DropDown from "../components/DropDown";
import ProductInList from "../components/ProductInList";
import { categories } from "../components/categories";
import { Link, useLocation } from "react-router-dom";



function ProductListing() {
  // const location = useLocation()
 
  // console.log(location)


  return (
    <div className="product-listing">
      <div className="list-header">
        <p>1-24 of over 50.000 results</p>
        <DropDown />
      </div>
      <div className="list-container">
        <div className="list-sorting">
          <h4>More-sustainable Products</h4>
        </div>
        <div className="product-list">
          <h3>Results</h3>
          <div className="products">
            <ProductInList />
            <ProductInList />
            <ProductInList />
            <ProductInList />
            <ProductInList />
            
          </div>
          {/* {product} */}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
