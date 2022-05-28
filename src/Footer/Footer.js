import React from "react";
import icon from "../images/nan.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <img src={icon} alt="Logo" />
        <div>
          <p>
            <a
              href="https://www.linkedin.com/in/hernan-amaiz-367b08103/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a href="https://github.com/Maizo21" target="_blank">
              GitHub
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/nan.amaiz/" target="_blank">
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/hernan.amaizperez/"
              target="_blank"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
