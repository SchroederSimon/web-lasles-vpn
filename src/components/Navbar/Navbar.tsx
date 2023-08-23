import "../Navbar/navbar.css";
import { Logo } from "../../utils/SVGS";
import ButtonPrimary from "../Button-primary/ButtonPrimary";

export const Navbar = () => {
  const theme = {
    textclass: "Sign Up",
  };

  const theme2 = {
    backgroundclass: "button-primary-transparent",
    textclass: "Sign In",
  };

  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="" />
        <div className="nav-links">
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
      </nav>
    </>
  );
};
