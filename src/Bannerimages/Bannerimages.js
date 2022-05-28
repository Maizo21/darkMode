import React from "react";
import "./Bannerimages.css";

const Bannerimages = ({ image1, image2, image3, text }) => {
  return (
    <>
      <div className="bannerImages">
        <div className="images">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
        </div>

        <div className="bannerContent">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Bannerimages;
