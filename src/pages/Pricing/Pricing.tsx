import "../Pricing/Pricing.css";
import { Free, Standard, Premium } from "../../utils/SVGS";
import ButtonPrimary from "../../components/Button-primary/ButtonPrimary";
import { PricingLogic } from "../../apiCalls/pricingAPI";

export const Pricing = () => {
  const { subscriptions, selectedBox, handleBoxClick } = PricingLogic();

  const theme = {
    text: "Select",
  };

  return (
    <div className="pricing-container padding">
      <div className="pricing-title-description">
        <h2>Choose Your Plan</h2>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully
        </p>
      </div>
      <div className="pricing-box-container">
        {subscriptions.map((subscription, index) => (
          <div
            className={`pricing-box ${selectedBox === index ? "selected" : ""}`}
            key={subscription.title}
            onClick={() => handleBoxClick(index)}
          >
            <div className="pricing-box-title-img">
              {subscription.title === "Free Plan" && (
                <img src={Free} alt="Free" />
              )}
              {subscription.title === "Standard Plan" && (
                <img src={Standard} alt="Standard" />
              )}
              {subscription.title === "Premium Plan" && (
                <img src={Premium} alt="Premium" />
              )}
              <strong>{subscription.title}</strong>
            </div>
            <ul className="pricing-benefits">
              {subscription.benefits.map((benefit) => (
                <li key={benefit}>
                  <i className="fa-solid fa-check"></i> {benefit}
                </li>
              ))}
            </ul>
            <div className="pricing-button">
              <p>
                <strong>{subscription.price}</strong> {subscription.currency}{" "}
                {subscription.type}
              </p>
              <ButtonPrimary theme={theme} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};