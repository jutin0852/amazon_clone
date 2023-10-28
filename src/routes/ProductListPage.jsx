import React from "react";
import "../styles/ProductListPage.scss";
import DropDown from "../components/DropDown";
import ProductInList from "../components/ProductInList";
import { categories } from "../components/categories";
import { NavLink, Link, useLocation } from "react-router-dom";
import { products } from "../components/allProducts";

const options = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low ",
  "Avg. Customer Review",
  "Best Sellers",
];

function ProductListPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const subcategory = params.get("subcategory");

  const product = products.filter((product) => {
    if (category && subcategory)
      return (
        product.category.categorySlug === category &&
        product.category.subCategory.categorySlug === subcategory
      );
    else if (category) return product.category.categorySlug === category;
  });

  console.log(category, subcategory);
  console.log(product);

  const cat = categories.find(
    (categories) => categories.categorySlug.toLowerCase() === category
  );

  return (
    <div className="product-listing">
      <div className="list-header">
        <p> {product.length} results</p>
        <DropDown sort={`sort by: `} options={options} />
      </div>
      <div className="list-container">
        <div className="list-sorting">
          <h4>Department</h4>
          <ul>
            {cat.subCategories.map((subcat, index) => (
              <li key={index}>
                <NavLink
                  className={
                    subcat.categorySlug === subcategory ? "isActive" : ""
                  }
                  to={`?category=${cat.categorySlug}&subcategory=${subcat.categorySlug}`}
                >
                  {subcat.subCategoryName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-list">
          <h3>Results</h3>
          <div className="products">
            {product.length !== 0 ? (
              product.map((product, index) => (
                <ProductInList key={index} product={product} />
              ))
            ) : (
              <h2>no product</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
