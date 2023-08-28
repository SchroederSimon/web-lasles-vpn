import "../Features/features.css";
import { Illustration2 } from "../../utils/SVGS";

export const Features = () => {
  return (
    <div className="feature-container padding">
      <img src={Illustration2} alt="" />
      <div className="feature-right">
        <h2>We Provide Many Features You Can Use</h2>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className="feature-list">
          <li>
            <i className="fa-solid fa-circle-check fa-xl"></i>Powerfull online
            protection.
          </li>
          <li>
            <i className="fa-solid fa-circle-check fa-xl"></i>Internet without
            border.
          </li>
          <li>
            <i className="fa-solid fa-circle-check fa-xl"></i>Supercharged VPN.
          </li>
          <li>
            <i className="fa-solid fa-circle-check fa-xl"></i>No specific time
            limit.
          </li>
        </ul>
      </div>
    </div>
  );
};
