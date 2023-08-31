import "../Navbar/navbar.css";
import { Logo } from "../../utils/SVGS";
import ButtonPrimary from "../Button-primary/ButtonPrimary";
import { NavbarProps } from "../../interfaces/IsOpen";
import { useTheme } from "../../ThemeContext";

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  const { theme, toggleTheme } = useTheme();

  const buttonThemeSignUp = {
    text: "Sign Up",
  };

  const buttonThemeSignIn = {
    backgroundclass: "button-primary-transparent",
    text: "Sign In",
  };

  return (
    <nav className={`navbar padding ${isMenuOpen ? "active" : ""}`}>
      <img className={`navbar-logo ${theme}`} src={Logo} alt="" />
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
      <button className="button-theme" onClick={toggleTheme}>
        {theme === "light" ? (
          <i className="theme-icon fas fa-moon fa-2xl"></i>
        ) : (
          <i className="theme-icon fas fa-sun fa-2xl"></i>
        )}
      </button>
      <div className="nav-login">
        <ButtonPrimary buttonTheme={buttonThemeSignIn} />
        <ButtonPrimary buttonTheme={buttonThemeSignUp} />
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
