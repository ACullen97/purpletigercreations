import React from "react";
import "./About.css";
import code1 from "../../assets/Mindvalley.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={code1} alt="code" />
      </div>
      <div className="about-right">
        <h3>Founder</h3>
        <h2>Alex Cullen</h2>
        <br />
        <p>
         Hi I'm Alex, a multi skilled creative trained in web development. I started out Purple Tiger as a place to share my music, which then branched out into a variety of creative disciplines, such as web development, media and audio production. I love creating digital products with an artistic flair and have completed a range of different projects for clients and personal endeavors. Thank you for checking out my portfolio!
        </p>
      </div>
    </div>
  );
};

export default About;
