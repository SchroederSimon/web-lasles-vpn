import "../Features/features.css";
import { Illustration2 } from "../../utils/SVGS";

export const Features = () => {
  return (
    <>
      <div className="feature-container">
        <div className="feature-left">
          <img src={Illustration2} alt="" />
        </div>
        <div className="feature-right">
          <h2 className="text-3xl font-bold">We Provide Many Features You Can Use</h2>
          <p>
            You can explore the features t hat we provide with fun and have
            their own functions each feature.
          </p>
          <ul className="feature-list">
            <li><i className="fa-solid fa-circle-check"></i>Powerfull online protection.</li>
            <li><i className="fa-solid fa-circle-check"></i>Internet without border.</li>
            <li><i className="fa-solid fa-circle-check"></i>Supercharged VPN.</li>
            <li><i className="fa-solid fa-circle-check"></i>No specific time limit.</li>
          </ul>
        </div>
      </div>
    </>
  );
};
