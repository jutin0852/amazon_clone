import React, { useRef, useEffect, useState } from "react";
import "../styles/HamburgerMenu.scss";
import { categories } from "./categories";
import { Link } from "react-router-dom";

function HamburgerMenu({ active, setActive }) {
  const [slide, setSlide] = useState(0);
  const [categoryName, setCategoryName] = useState("Electronics");
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
      document.body.classList.remove("no-scroll");
    }
  };

  const cat = categories.find(
    (category) => category.categoryName === categoryName
  );

  useEffect(() => {
    if (active) {
      document.addEventListener("mousedown", handleMouseDown);
    } else {
      document.removeEventListener("mousedown", handleMouseDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [active]);
  return (
    <>
      {active && (
        <div className={`Hamburger-Menu `}>
          <div className="menu-layout" ref={ref}>
            <div className="menu-head">
              <h2>
                <Link>Hello, Sign in</Link>
              </h2>
            </div>

            <div
              className="menu-list-layout"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <div className="menu-list">
                <h2>Shop by Department</h2>
                <MenuList
                  setSlide={setSlide}
                  setCategoryName={setCategoryName}
                  categories={categories}
                />

                <h2>Shop by Department</h2>
                <MenuList categories={categories} />
              </div>

              <div className="menu-list">
                <h4 onClick={() => setSlide(0)}>MAIN MENU</h4>

                <h2>{categoryName}</h2>

                <ul style={{border:"none"}}>
                  {cat.subCategories.map((subCat, index) => (
                    <li key={index}>{subCat.subCategoryName}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MenuList({ categories, setSlide, setCategoryName }) {
  const [viewMore, setViewMore] = useState(false);

  return (
    <ul>
      {categories
        .slice(0, viewMore ? categories.length : 3)
        .map((category, index) => (
          <li
            key={index}
            onClick={() => {
              setSlide(1);
              setCategoryName(category.categoryName);
            }}
          >
            {category.categoryName}
          </li>
        ))}

      <li onClick={() => setViewMore(!viewMore)}>see more</li>
    </ul>
  );
}
export default HamburgerMenu;
