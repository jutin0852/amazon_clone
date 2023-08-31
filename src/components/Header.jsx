import React, { useState } from "react";
import "../styles/Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
const category = [
  "All",
  "Arts and craft",
  " Automotive",
  "Baby",
  "Beauty & personal Care",
  "Books",
  " Computer",
  " Deals",
  " Digital music",
  "Electronics",
  "Girls Fashion",
  "Health & Household",
  "Industrial & scientific",
  "kindle Store",
  "Luggage",
  "Men's Fashion",
  "Movies & TV",
  "Music, CDs & Vinyl",
  "Pet supplies",
  "Prime Video",
  "Software",
  "Sports & Outdoors",
  "Tools & Home Improvement",
  "Toys and Games",
  "Video Games",
  "Womens Fashion",
];
function Header() {
  return (
    <div className="header">
      <Link to='/'>
        <div className="amazon-container">
          <div className="amazon-logo"> </div>
        </div>
      </Link>

      <div className="location">
        <div className="location-logo"></div>
        <div className="location-country">
          <span style={{ color: "#ccc" }}>Deliver to</span>
          <strong>Nigeria</strong>
        </div>
      </div>

      <form className="search">
        <div className="drop-down">
          <select name="categories" id="categories">
            {category.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <input className="input" type="text" placeholder="Search Amazon" />

        <button>
          <SearchIcon />
        </button>
      </form>

      <div className="header-options">
        <div className="header-option">
          <span>
            EN
            <span className="arrow">
              <ArrowDropDownIcon fontSize="small" />
            </span>
          </span>
        </div>
        <div className="header-option">
          <span>Hello, Dikonu</span>
          <strong>
            Account & Lists
            <span className="arrow">
              <ArrowDropDownIcon fontSize="small" />
            </span>
          </strong>
        </div>
        <div className="header-option">
          <span>Returns</span>
          <strong>& Orders </strong>
        </div>
        <div className="cart">
          <div className="cart-logo"></div>
          <strong className="cart-name">Cart</strong>
          <strong className="cart-num">0</strong>
        </div>
      </div>
    </div>
  );
}

export default Header;
