import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSidebarByType } from "../../features/sidebarSlice";
import SubmenuItems from "./SubmenuItems";
import MenuItem from "./MenuItem";
import "./sidebar.css";

const OpenedSidebar = () => {
  const { type } = useParams();
  const menuDataObj = useSelector((state) => selectSidebarByType(state, type));
  const menuData = menuDataObj[type];

  const initialSubMenuStates = Array(menuData?.length).fill(false);
  const [subMenuStates, setSubMenuStates] = useState(initialSubMenuStates);

  const handleSubMenuToggle = (index) => {
    const updatedSubMenuStates = [...subMenuStates];
    updatedSubMenuStates[index] = !updatedSubMenuStates[index];
    setSubMenuStates(updatedSubMenuStates);
  };

  return (
    <ul className="sidebar-menu">
      {menuData
        ? menuData.map((menuItem, index) => (
            <li className="menu-item" key={menuItem}>
              <MenuItem
                handleSubMenuToggle={handleSubMenuToggle}
                hasSubmenu={menuItem.subItems.length}
                index={index}
                subMenuStates={subMenuStates}
                menuItem={menuItem}
              />
              {subMenuStates[index] && menuItem.subItems.length !== 0 ? (
                <SubmenuItems menuItem={menuItem} />
              ) : null}
            </li>
          ))
        : null}
    </ul>
  );
};

export default OpenedSidebar;
