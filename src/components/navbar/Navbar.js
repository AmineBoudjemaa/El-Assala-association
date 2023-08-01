import {
  useDarkMode,
} from "../../customHooks/customHooks";
import "./navbar.css";
import NotificationButton from "./NotificationButton";
import SittingsButton from "./SittingsButton";

const Navbar = ({ toggleSidebar }) => {
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
              onClick={toggleSidebar}
            >
              <i className="fas fa-bars"></i>
            </button>
            <h2 className="logo">Logo</h2>
          </div>
          <div className="search-bar">
            <div className="wrap">
              <input
                type="text"
                placeholder="Search customers..."
                onChange={handleInputChange}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <ul className="navbar-buttons">
            <li>
              <button
                className="mode-switch-btn"
                onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
              >
                <i className="fas fa-moon"></i>
              </button>
            </li>
            <NotificationButton />
            <SittingsButton />
          </ul>
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
