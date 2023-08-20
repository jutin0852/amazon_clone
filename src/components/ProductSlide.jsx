import React, { useState } from "react";
import "../styles/productSlide.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Product from "./Product";

function ProductSlide({ deal, products, title }) {
  const [slidePosition, setSlidePosition] = useState(0);
  const nextSlide = () => {
    setSlidePosition(1);
  };

  const prevSlide = () => {
    setSlidePosition(0);
  };
  return (
    <div className="product-slide">
      <h2>{title}</h2>
      <div className="slide-container">
        <div
          className="slide-items"
          style={{ transform: `translateX(-${slidePosition * 100}%)` }}
        >
          {products.map((product, index) =>
            !deal ? (
              <img key={index} src={product} alt={product} />
            ) : (
              <div key={index}>
                <img src={product} alt={product} />
                <span className="percent-off">{`Up to % off`}</span>
                <strong className="top-deal">Top Deal</strong>
                <p className="product-info"></p>
              </div>
            )
          )}
          {/* <Product /> */}
        </div>
        <div className="prev" onClick={prevSlide}>
          <ArrowBackIosIcon fontSize="large" />
        </div>
        <div className="next" onClick={nextSlide}>
          <ArrowForwardIosIcon color="white" fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default ProductSlide;
