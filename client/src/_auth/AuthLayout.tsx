import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import '/src/css/AuthLayout.css';

const AuthLayout = () => {
  return (
    <div className="app">
      <NavBar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;