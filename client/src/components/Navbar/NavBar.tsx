import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import '/src/css/NavBar.css';
import '/src/css/NavButton.css';

const NavBar = () => {
    const navigate = useNavigate();
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    const handleAuthClick = () => {
        navigate("/auth/Sign-in");
    };

    return (
        <div>
            <header className="navbar">
                <a href="/">
                    <img src="/public/assets/NavbarImages/Logo1.png" alt="Logo" className="navbar-logo" />
                </a>
                <nav className={showMediaIcons ? "nav-open" : ""}>
                    <ul className={showMediaIcons ? "nav-links" : ""}>
                        <li>
                            <NavLink to="/" onClick={() => setShowMediaIcons(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Findpg" onClick={() => setShowMediaIcons(false)}>Find PG</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" onClick={() => setShowMediaIcons(false)}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Howitworks" onClick={() => setShowMediaIcons(false)}>How It Works !</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ContactUs" onClick={() => setShowMediaIcons(false)}>Contact Us</NavLink>
                        </li>
                        <li>
                            <Button text={"LogIn"} onClick={handleAuthClick} className="navbutton" />
                        </li>
                    </ul>
                </nav>
                <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                </div>
            </header>
        </div>
    );
}

export default NavBar;
