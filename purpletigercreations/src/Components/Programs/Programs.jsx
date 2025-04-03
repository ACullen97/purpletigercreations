import React, { useState } from "react";
import "./Programs.css";
import craash from "../../assets/CRAASH.png";
import tiger from "../../assets/Tiger_Logo_spacey.jpg";
import videoFF from "../../assets/Fuel-Finder-Presentation.mp4";

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

  const images = [craash, tiger];

  const description = [
    "A logo I created for a friend's clothing brand.",
    "This is the main logo that I created for my Purple Tiger brand, a hand drawn tiger illustration by a friend that I turned into digital artwork.",
  ];

  return (
    <>
      <div className="fuel-finder">
        <video className="ff-video" src={videoFF} controls></video>
        <br />
        <p>Final group project for the Northcoders Software Engineering Bootcamp. A fuel prices comparison app built in React Native.</p>
      </div>
    
      <div className="programs container-programs">
        <div className="carousel-programs">
          <button
            onClick={prevSlide}
            className="carousel-programs__btn carousel-programs__btn--prev"
          >
            &lt;
          </button>

          <img
            src={images[activeIndex]}
            alt={`Slide ${activeIndex}`}
            className="carousel-programs__img"
          />

          <div className="overlay-programs">
            <div className="text-programs">  <p>{description[activeIndex]}</p></div>
          </div>

          <button
            onClick={nextSlide}
            className="carousel-programs__btn carousel-programs__btn--next"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Programs;
