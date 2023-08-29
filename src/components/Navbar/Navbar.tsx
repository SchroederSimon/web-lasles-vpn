import "../Navbar/navbar.css";
import { Logo } from "../../utils/SVGS";
import ButtonPrimary from "../Button-primary/ButtonPrimary";
import { NavbarProps } from "../../interfaces/IsOpen";

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {

<<<<<<< HEAD
=======
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

>>>>>>> ae9aab69e42c293d2281d22cb35c40687b67acac
  const theme = {
    text: "Sign Up",
  };

  const theme2 = {
    backgroundclass: "button-primary-transparent",
    text: "Sign In",
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