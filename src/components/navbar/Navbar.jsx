import React from "react";
import "./navbarstyle.css";
import logo from "./../../assets/logo.svg";

function Navbar({ headline, darkMode, toggleDarkMode }) {
  return (
    <nav className={darkMode ? "dark": ""}>
      <img className="nav-icon" src={logo} alt="logo de React" width="30px" />
      <h3 className="nav-logo-text">{headline}</h3>
      <div className="toggler">
        <p className="toggler-light">Light</p>
        <div className="toggler-slider" onClick={toggleDarkMode}>
          <div className="toggler-slider-circle"></div>
        </div>
        <p className="toggler-dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
