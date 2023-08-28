import "../Navbar/navbar.css";
import { Logo } from "../../utils/SVGS";
import ButtonPrimary from "../Button-primary/ButtonPrimary";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const theme = {
    textclass: "Sign Up",
  };

  const theme2 = {
    backgroundclass: "button-primary-transparent",
    textclass: "Sign In",
  };

  return (
    <nav className={`navbar padding ${isMenuOpen ? "active" : ""}`}>
      <img src={Logo} alt="" />
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <div className="nav-login">
        <ButtonPrimary theme={theme2} />
        <ButtonPrimary theme={theme} />
      </div>
      <div className="burger-menu">
        <button onClick={toggleMenu}>
          <i
            className={`fa-solid fa-${isMenuOpen ? "times" : "bars"} fa-2x`}
          ></i>
        </button>
      </div>
    </nav>
  );
};
