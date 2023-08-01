import { Link } from "react-router-dom";

const SubmenuItems = ({ menuItem }) => {
  return (
    <ul className="sub-menu">
      {menuItem.subItems.map((subItem, subIndex) => (
        <li key={subIndex}>
          <Link to={`${menuItem.title}${subItem}`}>{subItem}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubmenuItems;
