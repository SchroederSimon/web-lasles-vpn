import "./locations.css";
import { Sponsored, HugeGlobal } from "../../utils/SVGS";

export const Locations = () => {
  return (
    <div className="locations-container padding">
      <div className="locations-title">
        <h2>Huge Global Network of Fast VPN</h2>
        <p>
          See<span>LaslessVPN</span>everywhere to make it easier for you
          when you move locations.
        </p>
      </div>
      <div className="locations-image">
        <img src={HugeGlobal} alt="" />
        <img src={Sponsored} alt="" />
      </div>
    </div>
  );
};
