"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slides } from "./Slides";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const CarouselSlider = () => {
  return (
    <div className="slide-container">
      <Slide autoplay={true} duration={2000}>
        {slides.map((slideImage, index) => (
          <div key={index}>
            <img
              className="cursor-pointer"
              style={{ ...divStyle, width: "100%", height: "18rem" }}
              src={slideImage}
            />
            {/* <span style={spanStyle}>text</span> */}
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default CarouselSlider;
