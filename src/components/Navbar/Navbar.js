import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="Navbar">
      <span className="brand">Travora</span>
      <div className="navbarLinks">
        <a href="#" className="navLink">Home</a>
        <a href="#" className="navLink">About Us</a>
        <a href="#" className="navLink">Domestic</a>
        <a href="#" className="navLink">International</a>
        <a href="#" className="navLink">Corporate</a>
        <a   href="#" className="navLink">Contact Us</a>
        <button href="#" className="navLink" id="mobNo"><a>+91 9013298616</a></button>
      </div>
    </div>
  );
}

export default Navbar;
