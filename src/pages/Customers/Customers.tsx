import "./customers.css";
import { usersReview } from "../../utils/data";
import { CustomerInterface } from "../../interfaces/Customer";
import { useState } from "react";

export const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % usersReview.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + usersReview.length) % usersReview.length
    );
  };

  const totalPages = Math.ceil(usersReview.length / reviewsPerPage);

  return (
    <div className="customers-container">
      <div className="customers-title">
        <h2 className="text-3xl font-bold">
          Trusted by Thousands of Happy Customer
        </h2>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this amazing feature.
        </p>
      </div>
      <div className="customers-card-container">
        {usersReview
          .slice(currentIndex, currentIndex + 3)
          .map((customer: CustomerInterface, index: number) => (
            <div
              className={`customer-card ${index === 0 ? "active" : ""}`}
              key={currentIndex + index}
            >
              <div className="customer-card-user-profile">
                <img src={customer.image} alt={customer.customer} />
                <div className="customer-card-name">
                  <strong>{customer.customer}</strong>
                  <p>{customer.location}</p>
                </div>
                <p>{customer.rate}</p>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="customer-card-user-description">
                <p>{customer.description}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="customers-slider-components">
        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`dot ${
                Math.floor(currentIndex / reviewsPerPage) === i ? "active" : ""
              }`}
            ></div>
          ))}
        </div>
        <div className="customers-buttons">
          <button onClick={handlePrevClick}>
            <i className="fa-solid fa-arrow-left fa-lg"></i>
          </button>
          <button onClick={handleNextClick}>
            <i className="fa-solid fa-arrow-right fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

/**
<div className="customers">
        <div className="customers-card-container">
          <div className="customer-card">
            <div className="customer-card-user-profile">
                <img src={Viezh} alt="" />
              <div className="customer-card-name">
                <strong>Viezh Robert</strong>
                <p>Warsaw, Poland</p>
              </div>
              <p>4.5</p>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="customer-card-user-description">
              <p>
                "Wow... I am very happy to use this VPN, it turned to be more
                than my expectations and so far there have been no problems.
                LaslesVPN always the best".
              </p>
            </div>
          </div>
        </div>
        <div className="customers-card-container">
          <div className="customer-card">
            <div className="customer-card-user-profile">
              <img src={Viezh} alt="" />
              <strong>Viezh Robert</strong>
              <p>Warsaw, Poland</p>
              <strong>4.5</strong>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="customer-card-user-description">
              <p>
                "Wow... I am very happy to use this VPN, it turned to be more
                than my expectations and so far there have been no problems.
                LaslesVPN always the best".
              </p>
            </div>
          </div>
        </div>
        <div className="customers-card-container">
          <div className="customer-card">
            <div className="customer-card-user-profile">
              <img src={Viezh} alt="" />
              <strong>Viezh Robert</strong>
              <p>Warsaw, Poland</p>
              <strong>4.5</strong>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="customer-card-user-description">
              <p>
                "Wow... I am very happy to use this VPN, it turned to be more
                than my expectations and so far there have been no problems.
                LaslesVPN always the best".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 */
