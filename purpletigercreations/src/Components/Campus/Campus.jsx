import React, { useState } from "react";
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
    "../../assets/Weird_World_Artwork.png",
    "../../assets/Grime_Time.png",
    "../../assets/STRALIS.jpg",
  ];

  const iframes = [
    "https://open.spotify.com/embed/album/5hqbPubFYqPy7wTUWPH4mn?utm_source=generator",
    "https://open.spotify.com/embed/album/4NG8eAZCe9EQO313bSxosM?utm_source=generator",
    "https://open.spotify.com/embed/album/3hEtyEaW7qXty5hX2jn0UU?utm_source=generator",
  ]

  return (
    <div className="campus">
      <div className="carousel container-campus">
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

       

        <div className="overlay">
          <div className="text"></div>
          <iframe src={iframes[activeIndex]} width="100%" height="320px" frameborder="0"></iframe>
        </div>
       
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
