import React from "react";
import "./sidebar.css";
import { useSelector } from "react-redux";
import { getCategoriesNames } from "../../features/categoriesSlice";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ toggleSidebar, modalContentRef, isSidebarOpen }) => {
  const categories = useSelector(getCategoriesNames)
  return (
      <AnimatePresence>
        {isSidebarOpen && <motion.aside id="sidebar"
        >
          <motion.div className="sidebar" ref={modalContentRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%', transition: { ease: "easeInOut" }, }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
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
              {categories.map(category => (
                <li key={categories}>
                  <Link to='category'>
                    <span> <i className="fas fa-home"></i> {category} </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.aside>}
      </AnimatePresence>
  );
};

export default Sidebar;
