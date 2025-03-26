import React, { useState } from "react";
import "./Programs.css";

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const images = [
    "src/assets/Code1.png",
    "src/assets/Tiger_Logo_spacey.jpg",
  ];

  return (
    <div className="programs">
      <div className="carousel">
        <button
          onClick={prevSlide}
          className="carousel__btn carousel__btn--prev"
        >
          &lt;
        </button>
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
        />
        <button
          onClick={nextSlide}
          className="carousel__btn carousel__btn--next"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Programs;
