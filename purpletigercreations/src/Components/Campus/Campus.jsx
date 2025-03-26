import React, {useState} from "react";
import "./Campus.css";

const Campus = () => {

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
      "src/assets/Weird_World_Artwork.png",
      "src/assets/Tiger_Logo_spacey.jpg",
    ];

  return (
    <div className="campus">
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

export default Campus;
