import React from "react";
import ImageSlider from "../components/ImageSlider";
import AllProducts from "../components/AllProducts";
import "../styles/home.scss";
import Footer from "../components/Footer";

const imagesForSlider = [
  "/71Ie3JXGfVL._SX3000_.jpg",
  "/71U-Q+N7PXL._SX3000_.jpg",
  "/81KkrQWEHIL._SX3000_.jpg",
  "61zAjw4bqPL._SX3000_.jpg",
  "51RPiINhM7L._SX1500_.jpg",
];

function Home() {
  
  return (
    <div className="home">
      <div className="slide">
        <ImageSlider images={imagesForSlider} />
      </div>
      <div className="products">
        <AllProducts />
      </div>
      <Footer />

    </div>
  );
}

export default Home;
