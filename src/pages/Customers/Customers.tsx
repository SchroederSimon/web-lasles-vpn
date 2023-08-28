import "./customers.css";
import { CustomersLogic } from "../../apiCalls/customersTestimonial";

export const Customers = () => {
  const { testimonials, startIndex, setStartIndex } = CustomersLogic();

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