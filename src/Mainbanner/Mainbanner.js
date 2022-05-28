import React from "react";
import "./Mainbanner.css";

const Mainbanner = ({ image, title, text }) => {
  return (
    <>
      <div className="Mainbanner">
        <img src={image} alt="Mainbanner" />
        {title && (
          <div>
            <h1>{title}</h1>

            <p>{text}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Mainbanner;
