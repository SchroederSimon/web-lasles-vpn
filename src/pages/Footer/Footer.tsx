import "./footer.css";
import { Logo } from "../../utils/SVGS";
import { linksData } from "../../utils/data";

export const Footer = () => {
  return (
    <footer className="footer-container padding">
      <div className="footer-left">
        <img className="footer-logo" src={Logo} alt="" />
        <p>
          LaslesVPN is a private virtual network that has unique features and
          has high security.
        </p>
        <div className="footer-icons">
          <i className="fa-brands fa-facebook fa-xl"></i>
          <i className="fa-brands fa-twitter fa-xl"></i>
          <i className="fa-brands fa-instagram fa-xl"></i>
        </div>
        <span>©2020LaslesVPN</span>
      </div>
        {linksData.sections.map((section) => (
          <div className="footer-links" key={section.title}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
    </footer>
  );
};
