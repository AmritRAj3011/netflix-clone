"use strick";
import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrolly > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="navContents">
        <img
          className="imgNetflix"
          src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
          alt=""
        />
        <img
          className="imgAvatar"
          src="https://tse1.mm.bing.net/th?id=OIP.-HoDebcd1MseGnmiTJALDAHaEo&pid=Api&P=0"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
