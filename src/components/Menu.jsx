import React, { useState } from "react";
import "../styles/Menu.scss";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const menuList = [
  "Today's Deal",
  "Buy Again",
  "Customer Service",
  "Registry",
  "Gift Card",
  "Sell",
];

function Menu() {
  const [active, setActive] = useState(false);

  const handleMenuCLick = () => {
    setActive(true);
    document.body.classList.add('no-scroll')
  };
  
  return (
    <div className="menu">
      <span className="all" onClick={handleMenuCLick}>
        All
      </span>
      <ul>
        {menuList.map((list, index) => (
          <li key={index}>
            <Link>{list}</Link>
          </li>
        ))}
      </ul>
      <HamburgerMenu setActive={setActive} active={active} />
    </div>
  );
}

export default Menu;
