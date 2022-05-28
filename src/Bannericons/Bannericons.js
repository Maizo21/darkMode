import React from "react";
import "./Bannericons.css";

const Bannericons = ({ logo1, texto1, logo2, texto2, logo3, texto3 }) => {
  return (
    <>
      <div className="bannerIcons">
        <div className="bannerItem">
          <img src={logo1} alt="Logo 1" />
          <p>{texto1}</p>
        </div>

        <div className="bannerItem">
          <img src={logo2} alt="Logo 2" />
          <p>{texto2}</p>
        </div>

        <div className="bannerItem">
          <img src={logo3} alt="Logo 3" />
          <p>{texto3}</p>
        </div>
      </div>
    </>
  );
};

export default Bannericons;
