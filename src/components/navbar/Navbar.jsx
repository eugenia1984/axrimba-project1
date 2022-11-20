import React from "react";
import "./navbarstyle.css";
import logo from './../../assets/logo.svg';

function Navbar( { headline, text} ) {
  return (
    <nav>
      <img 
        className="nav-icon" 
        src={logo} 
        alt="logo de React" 
        width="30px" 
        />
      <h3   
        className="nav-logo-text">
        { headline }
      </h3>
      <h4   
        className="nav-title">
        { text }
      </h4>
    </nav>
  );
}

export default Navbar;