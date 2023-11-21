import React from "react";
import "../styles/header.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import { useCartId } from "./cartContext";
import SearchBar from "./SearchBar";

function Header() {
  const cart = useCartId();
  return (
    <div className="header">
      <Link to="/">
        <div className="amazon-container">
          <div className="amazon-logo"> </div>
        </div>
      </Link>

      <div className="location">
        <div className="location-logo"></div>
        <div className="location-country">
          <span style={{ color: "#ccc", paddingRight: "3px" }}>
            Deliver to{" "}
          </span>
          <strong> Nigeria</strong>
        </div>
      </div>

      <SearchBar />

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
        <PersonOutlineOutlinedIcon fontSize="large" className="person-icon" />

        <Link to={"/cart"}>
          <div className="cart">
            <div className="cart-logo"></div>
            <strong className="cart-name">Cart</strong>
            <strong className="cart-num">{cart.length}</strong>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
