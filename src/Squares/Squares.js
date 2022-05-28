import React from "react";
import "./Squares.css";

const Squares = ({ image1, image2, image3, image4 }) => {
  return (
    <>
      <div className="squares">
        <ul>
          <img src={image1} alt="Square1" />
          <img src={image2} alt="Square2" />
          <img src={image3} alt="Square3" />
          <img src={image4} alt="Square4" />
        </ul>
      </div>
    </>
  );
};

export default Squares;
