import { useState, useEffect } from "react";

import { CustomerInterface } from "../interfaces/Customer";
import { usersReview } from "../utils/data";
import { BASE_URL } from "./baseURL";


export const CustomersLogic = () => {
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

  return {
    testimonials,
    startIndex,
    setStartIndex,
  };
};