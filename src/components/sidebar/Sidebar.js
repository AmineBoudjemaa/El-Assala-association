import React from "react";
import "./sidebar.css";
import { useSelector } from "react-redux";
import { getCategoriesNames } from "../../features/categoriesSlice";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar, modalContentRef }) => {
  const categories = useSelector(getCategoriesNames)
  return (
    <aside id="sidebar" >
      <div className="sidebar" ref={modalContentRef}>
        <div className="navbar-brand">
          <button
            className="toggle-sidebar-btn"
            id="toggle-sidebar-btn"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
          <h1 className="logo">Logo</h1>
        </div>
        <ul className="sidebar-menu">
          {categories.map(category=>(
            <li key={categories}>
              <Link to='category'>
                <span> <i className="fas fa-home"></i> {category} </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
