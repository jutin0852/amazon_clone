import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { products } from "../components/allProducts";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SearchBar.scss";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [categoryName, setCategoryName] = useState("All");
  const navigate = useNavigate();

  console.log(categoryName);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (selectedItem < searchResult.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
        setSearchText(searchResult[selectedItem - 1].productName);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchResult.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
        setSearchText(searchResult[selectedItem + 1].productName);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        setSearchResult([]);
      }
    } else {
      setSelectedItem(-1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${searchText}`);
    setSearchResult([]);
  };

  useEffect(() => {
    if (searchText) {
      let searchData;
      if (categoryName !== "All") {
        console.log("not all");

        let productCategory = products.filter(
          (products) => products.category.categoryName === categoryName
        );
        searchData = productCategory.filter((product) =>
          product.productName.toLowerCase().includes(searchText.toLowerCase())
        );
      } else {
        searchData = products.filter((product) =>
          product.productName.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      if (searchData.find((item) => item.productName !== searchText)) {
        setSearchResult(searchData);
      }
    } else {
      setSearchResult([]);
    }
  }, [searchText]);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="drop-down">
        <select
          name="categories"
          id="categories"
          onChange={(e) => {
            setCategoryName(e.target.value);
            setSearchResult([]);
          }}
        >
          {category.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <input
        className="input"
        type="text"
        value={searchText}
        placeholder="Search Amazon"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button>
        <SearchIcon />
      </button>
      <div className="search-results">
        {searchResult.slice(0, 10).map((result, index) => (
          <li
            key={index}
            className={selectedItem === index ? "selected-item" : null}
            onClick={() => setSearchResult([])}
          >
            <Link to={`/${result.productName}`}>{result.productName}</Link>
          </li>
        ))}
      </div>
    </form>
  );
}

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
