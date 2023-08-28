import "./customers.css";
import { CustomerInterface } from "../../interfaces/Customer";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Pricing/Pricing";
import { usersReview } from "../../utils/data";

export const Customers = () => {
  const [testimonials, setTestimonials] = useState<CustomerInterface[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetch(`${BASE_URL}/api/testimonial`)
      .then((response) => response.json())
      .then((apiData: CustomerInterface[]) => {
        const combinedData = apiData.map((testimonial, index) => ({
          ...testimonial,
          ...usersReview[index],
        }));
        setTestimonials(combinedData);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  const isMobile = window.innerWidth <= 550;

  return (
    <div className="customers-container padding">
      <div className="customers-title">
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this amazing feature.
        </p>
      </div>
      <div className="customers-card-container">
        {testimonials
          .slice(startIndex, startIndex + (isMobile ? 1 : 3))
          .map((testimonial, index) => (
            <div
              className={`customer-card ${index === 0 ? "active-card" : ""}`}
              key={testimonial.testimonial}
            >
              <div className="customer-card-user-profile">
                <div className="customer-circle">
                  <img src={testimonial.avatar} alt={testimonial.fullName} />
                </div>
                <div className="customer-card-name">
                  <strong>{testimonial.fullName}</strong>
                  <p>{testimonial.location}</p>
                </div>
                <p>{testimonial.rate}</p>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="customer-card-user-description">
                <p>{testimonial.testimonial}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="customers-slider-components">
        <div className="pagination-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${startIndex === index ? "active-dot" : ""}`}
            ></div>
          ))}
        </div>
        <div className="customers-buttons">
          <button onClick={() => setStartIndex(Math.max(0, startIndex - 1))}>
            <i className="fa-solid fa-arrow-left fa-lg"></i>
          </button>
          <button
            onClick={() =>
              setStartIndex(Math.min(testimonials.length - 1, startIndex + 1))
            }
          >
            <i className="fa-solid fa-arrow-right fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

/**

  //const [currentIndex, setCurrentIndex] = useState(0);
  /*
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const totalPages = Math.ceil(testimonials.length / reviewsPerPage);
*/
{
  /* {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`dot ${
                Math.floor(currentIndex / reviewsPerPage) === i ? "active" : ""
              }`}
            ></div>
          ))} */
}
{
  /* <button onClick={handlePrevClick}>
            <i className="fa-solid fa-arrow-left fa-lg"></i>
          </button>
          <button onClick={handleNextClick}>
            <i className="fa-solid fa-arrow-right fa-lg"></i>
          </button> */
}
