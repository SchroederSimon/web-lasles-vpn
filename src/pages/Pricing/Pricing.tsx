import "../Pricing/Pricing.css";
import { Free, Standard, Premium } from "../../utils/SVGS";
import ButtonPrimary from "../../components/Button-primary/ButtonPrimary";
import { PricingInfo } from "../../interfaces/PricingInfo";
import { useEffect, useState } from "react";

export const BASE_URL =
  "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

export const Pricing = () => {
  const [subscriptions, setSubscriptions] = useState<PricingInfo[]>([]);
  const [error, setError] = useState<string>();
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const theme = {
    backgroundclass: "button-primary",
    textclass: "Select",
  };

  const theme2 = {
    backgroundclass: "button-primary-solid",
    textclass: "Select",
  };

  useEffect(() => {
    fetch(`${BASE_URL}/api/subscription`)
      .then((response) => {
        response.json().then((result) => {
          setSubscriptions(result);
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleBoxClick = (index: number) => {
    setSelectedBox(index);
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
              <img src={Free} alt="" />
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
              {selectedBox === index ? (
                <ButtonPrimary theme={theme2} />
              ) : (
                <ButtonPrimary theme={theme} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
