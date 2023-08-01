import { Link } from "react-router-dom";

const MenuItem = ({
  hasSubmenu,
  menuItem,
  handleSubMenuToggle,
  index,
  subMenuStates,
}) => {
  return (
    <>
      {hasSubmenu === 0 ? (
        <Link to={menuItem.path}>{menuItem.title}</Link>
      ) : (
        <>
          <Link onClick={() => handleSubMenuToggle(index)}>
            <span>
              <i className="fas fa-cog "></i> {menuItem.title}
            </span>
            <i
              className={`fa-solid fa-angle-down ${
                subMenuStates[index] ? "rotate" : ""
              }`}
            ></i>
          </Link>
        </>
      )}
    </>
  );
};

export default MenuItem;
