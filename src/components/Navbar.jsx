import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <header>
      <div className="container grid-menu">
        <div className="logo">
          <img src="./vite.svg" alt="Vite logo" />
        </div>
        <nav className={isOn ? "menu-mobile" : "menu-web"}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="ham-menu">
          <button onClick={handleToggleButton}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
