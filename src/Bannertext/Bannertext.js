import React from "react";
import "./Bannertext.css";

const Bannertext = ({ text, text2, text3, textColor, backgroundColorText }) => {
  let styles;
  text3
    ? (styles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "5px",
        background: backgroundColorText,
        color: textColor,
        alignItems: "center",
        textAlign: "center",
      })
    : (styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "15px",
        background: backgroundColorText,
        color: textColor,
      });

  return (
    <>
      <div style={styles} className="bannerText">
        <p>{text}</p>
        {text2 ? <p>{text2}</p> : null}

        {text3 ? <p>{text3}</p> : null}
      </div>
    </>
  );
};

export default Bannertext;
