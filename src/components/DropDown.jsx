import React from "react";
import "../styles/DropDown.scss";
import { useState, useRef } from "react";
import { useEffect } from "react";

const options = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low ",
  "Avg. Customer Review",
  "Best Sellers",
];

function DropDown() {
  const [title, setTitle] = useState("Featured");
  const [isOpen, setIsOpen] = useState(false);
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
        Sort By: {title}
      </div>
      {isOpen && (
        <ul ref={ref}>
          {options.map((option, index) => (
            <li
              className={option === title ? "active" : ""}
              onClick={() => {
                setIsOpen(!isOpen), setTitle(option);
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
