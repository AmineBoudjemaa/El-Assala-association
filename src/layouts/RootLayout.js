import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />
      <Outlet />
    </div>
  );
}
