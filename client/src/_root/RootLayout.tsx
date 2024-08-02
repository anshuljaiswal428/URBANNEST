import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import '/src/css/RootLayout.css';

const RootLayout = () => {
  return (
    <div className="app">
      <NavBar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;