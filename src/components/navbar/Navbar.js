import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useDarkMode,
  useDropdown,
} from "../../customHooks/customHooks";
import "./navbar.css";
import NotificationButton from "./NotificationButton";
import SittingsButton from "./SittingsButton";

const Navbar = () => {
  const [, setDarkMode] = useDarkMode();

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            <button
              className="toggle-sidebar-btn"
              id="toggle-sidebar-btn"
            >
              <i className="fas fa-bars"></i>
            </button>
            <h1 className="logo">Logo</h1>
          </div>
          <div className="search-bar">
            <div className="wrap">
              <input
                type="text"
                placeholder="Search customers..."
                onChange={handleInputChange}
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="navbar-buttons">
            <button
              className="mode-switch-btn"
              onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
            >
              <i className="fas fa-moon"></i>
            </button>
            <NotificationButton />
            <SittingsButton />
          </div>
          <div className="navbar-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
