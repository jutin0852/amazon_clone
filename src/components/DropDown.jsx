import React from "react";
import "../styles/DropDown.scss";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { useCartDispatch } from "./cartContext";

function DropDown({ options, sort, setItemQty, itemQty, cartItem }) {
  // const [itemQty, setItemQty] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useCartDispatch();
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleMouseDown);
    } else {
      document.removeEventListener("mousedown", handleMouseDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isOpen]);

  return (
    <div className="drop-down">
      <div
        className="drop-down-title"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {sort}
        {itemQty}
      </div>
      {isOpen && (
        <ul ref={ref}>
          {options.map((option, index) => (
            <li
              className={option === itemQty ? "active" : ""}
              onClick={() => {
                if (cartItem) {
                  dispatch({
                    type: "editCartItem",
                    item: { ...cartItem, qty: option },
                  });
                }

                setIsOpen(!isOpen), setItemQty(option);
                console.log(cartItem, option);
              }}
              key={index}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
