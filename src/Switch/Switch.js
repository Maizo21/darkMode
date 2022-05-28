import React, { useState } from "react";
import "./Switch.css";

const Switch = () => {
  const [darkMode, setDarkMode] = useState(false);
  let stylesToggle;

  function toggle() {
    let body = document.querySelector("body");

    stylesToggle = darkMode
      ? ((body.style.backgroundColor = "#eaeaea"), (body.style.color = "#000"))
      : ((body.style.backgroundColor = "#000"), (body.style.color = "#fff"));
  }

  let boxColor = darkMode ? "#fff" : "#100F10";

  return (
    <>
      <div className="Switch" style={stylesToggle}>
        <div class="inputBox" style={{ backgroundColor: boxColor }}>
          <input
            type="checkbox"
            name="toggle-sun"
            id="toggle-sun"
            onChange={darkMode ? toggle : toggle}
          />
          <label
            for="toggle-sun"
            class="toggle-icon sun"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌞" : "🌚"}
          </label>
        </div>
      </div>
    </>
  );
};

export default Switch;
