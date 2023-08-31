import React, { useEffect, useState } from "react";
import "../styles/ImageSlider.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function ImageSlider({ images }) {
  const [currentSlide, setCurrentSlider] = useState(0);

  const nextslide = () => {
    setCurrentSlider((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSLide = () => {
    setCurrentSlider(
      (prevSLide) => (prevSLide - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextslide, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={image} />
        ))}
      </div>
      <div className="prev" onClick={prevSLide}>
        <ArrowBackIosIcon fontSize="large" />
      </div>
      <div className="next" onClick={nextslide}>
        <ArrowForwardIosIcon color="white" fontSize="large" />
      </div>
      <div className="gradient"></div>
    </div>
  );
}

export default ImageSlider;
