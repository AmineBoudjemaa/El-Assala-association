import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar"
import { useRef } from "react";
import { useDropdown } from "../customHooks/customHooks";

export default function RootLayout() {
  const modalContentRef = useRef(null);
  const [isOpen, , , toggle] = useDropdown(modalContentRef)
  return (
    <div className="root-layout">
      <Navbar toggleSidebar={toggle} />
      <Sidebar toggleSidebar={toggle} isSidebarOpen={isOpen} modalContentRef={modalContentRef} />
      <Outlet />
    </div>
  );
}
