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
      })
  }, []);

  return (
    <div className="pricing-container">
      <div className="pricing-title-description">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully
        </p>
      </div>
      <div className="pricing-box-container">
        {subscriptions.map((subscription, index) => (
          <div className="pricing-box" key={subscription.title}>
            <div className="pricing-box-title-img">
              <img src={Free} alt="" />
              <strong>{subscription.title}</strong>
            </div>
            <ul className="pricing-benefits">
              {subscription.benefits.map(benefit => (
                <li key={benefit}>
                  <i className="fa-solid fa-check"></i> {benefit}
                </li>
              ))}
            </ul>
            <div className="pricing-button">
              <p>
                <strong>{subscription.price}</strong> {subscription.currency} {subscription.type}
              </p>
              {index === subscriptions.length - 1 ? (
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
}


/*

        </div>
        <div className="pricing-box">
          <div className="pricing-box-information">
            <img src={wStandard} alt="" />
            <strong>Standard Plan</strong>
            <ul>
              <li>
                <i className="fa-solid fa-check"></i>Unlimited Bandwitch
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Encrypted Connection
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Yes traffict Logs
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Works on All Devices
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Connect Anyware
              </li>
            </ul>
          </div>
          <div className="pricing-box-button">
            <p>
              {" "}
              <strong>$9</strong> / mo
            </p>
            <ButtonPrimary theme={wtheme} />
          </div>
        </div>
        <div className="pricing-box">
          <div className="pricing-box-information">
            <img src={wPremium} alt="" />
            <strong>Premium Plan</strong>
            <ul>
              <li>
                <i className="fa-solid fa-check"></i>Unlimited Bandwitch
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Encrypted Connection
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Yes traffict Logs
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Works on All Devices
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Connect Anyware
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Get New Features
              </li>
            </ul>
          </div>
          <div className="pricing-box-button">
            <p>
              {" "}
              <strong>$12</strong> / mo
            </p>
            <ButtonPrimary theme={Wtheme2} />
          </div>
        </div>
*/