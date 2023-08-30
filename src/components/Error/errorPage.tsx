import React from "react";
import "./error.css";
import { Error } from "../../utils/SVGS";

interface ErrorDisplayProps {
  error: string;
}

const ErrorPage: React.FC<ErrorDisplayProps> = ({ error }) => {
  return (
    <div className="error-container padding">
      <div className="error-image">
        <img src={Error} alt="" />
      </div>
      <div className="error-description">
        <h2>Oops! Something Went Wrong</h2>
        <p>{error}asd</p>;<p>Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
