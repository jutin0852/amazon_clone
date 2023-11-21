import React, { useState } from "react";
import { useLoaderData, useParams, useRouteError } from "react-router-dom";
import { products } from "../components/allProducts";
import "../styles/ProductDetailsPage.scss";
import DropDown from "../components/DropDown";
import { Link } from "react-router-dom";
import { useCartDispatch } from "../components/cartContext";
import SearchErrorPage from "./SearchErrorPage";




function ProductDetailsPage() {
  const productDetails = useLoaderData();

  if (typeof productDetails === "object") {
    const {
      productId,
      productName,
      category,
      productImgs,
      price,
      pack,
      pricing,
      brand,
      productBenefits,
      itemForm,
      NumberOfItem,
      MaterialTypeFree,
      aboutItem,
      note,
    } = useLoaderData();

    const dispatch = useCartDispatch();
    const [imgPreview, setImgPreview] = useState(productImgs.detailsImg[0]);
    const [itemQty, setItemQty] = useState(1);

    return (
      <div className="product-details-page">
        <p>{`${category.categoryName} > ${category.subCategory.categoryName}`}</p>

        <div className="product-details">
          <div className="img-preview">
            <div className="small-img-preview">
              {productImgs.detailsImg.map((img, index) => (
                <div
                  key={index}
                  className="small-img"
                  onMouseEnter={(e) => {
                    setImgPreview(img);
                  }}
                >
                  <img src={img} key={index} alt={img} />
                </div>
              ))}
            </div>
            <div className="big-img-preview">
              <img src={imgPreview} alt="" />
            </div>
          </div>

          <div className="details">
            <div className="product-spec">
              <p className="product-name">{productName}</p>
              <div className="product-info">
                <div
                  style={{
                    borderTop: "1px solid grey",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <span className="percent-off">{pricing.percentOff}</span>

                  <div style={{ display: "inline" }}>
                    <span className="dollar">$</span>
                    <h3 className="price">{price}</h3>
                    <span className="nine-nine">99</span>
                    <span>{pricing.per} </span>
                  </div>

                  <p style={{ fontSize: "0.8rem", padding: "5px 0" }}>
                    List price: <strike>{pricing.typePrice}</strike>
                  </p>
                  <p>
                    size : <b>{pack}</b>
                  </p>
                  <div className="brand-specs">
                    <div>
                      <span>Brand</span>
                      <span>Product Benefits</span>
                      <span>Item Form</span>
                      <span>Number of items</span>
                      <span>Material Type Free</span>
                    </div>
                    <div>
                      <span>{brand}</span>
                      <span>{productBenefits}</span>
                      <span>{itemForm}</span>
                      <span>{NumberOfItem}</span>
                      <span>{MaterialTypeFree}</span>
                    </div>
                  </div>
                </div>

                <div className="product-info-2">
                  <h2>About this item</h2>
                  <ul>
                    {aboutItem.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <p>
                    <b>Note</b>: {note}
                  </p>
                </div>
              </div>
            </div>

            <div className="order-details">
              <div className="buy-item">
                <div style={{ display: "inline" }}>
                  <span className="dollar">$</span>
                  <h3 className="price">{price}</h3>
                  <span className="nine-nine">99</span>
                  <span>{pricing.per} </span>
                </div>

                <h3 style={{ color: "green " }}>in Stock</h3>

                <DropDown
                  options={[1, 2, 3, 4, 5]}
                  sort={`qty:`}
                  itemQty={itemQty}
                  setItemQty={setItemQty}
                />

                <Link to={"/cart"}>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "addToCart",
                        id: productId,
                        qty: itemQty,
                        price: price,
                      });
                    }}
                  >
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <SearchErrorPage productDetails={productDetails} />;
} 


export function loader({ params }) {
  let { productName } = params;
  const productDetail = products.find(
    (product) => productName === product.productName
  );
  if (productDetail) {
    return productDetail;
  } else {
    return productName;
  }
}

export default ProductDetailsPage;
