import "../Pricing/Pricing.css";
import { Free, Standard, Premium } from "../../utils/SVGS";
import ButtonPrimary from "../../components/Button-primary/ButtonPrimary";
import useGetData from "../../apiCalls/useGetData";
import { PricingInfo } from "../../interfaces/PricingInfo";
import { useState } from "react";
import ErrorPage from "../../components/Error/errorPage";


export const Pricing = () => {
  const [selectedBox, setSelectedBox] = useState<number>();
  
  const {
    result: subscriptions,
    error,
    loading,
  } = useGetData<PricingInfo[]>({
    endpoint: "subscription",
  });
  
  const buttonThemeSelect = {
    text: "Select",
  };
  
  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

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
        {subscriptions?.map((subscription, index) => (
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
              <ButtonPrimary buttonTheme={buttonThemeSelect} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};