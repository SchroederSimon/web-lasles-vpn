
import { useState, useEffect } from "react";
import { BASE_URL } from "./baseURL";
import { PricingInfo } from "../interfaces/PricingInfo";

export const PricingLogic = () => {
  const [subscriptions, setSubscriptions] = useState<PricingInfo[]>([]);
  const [error, setError] = useState<string>();
  const [selectedBox, setSelectedBox] = useState<number>();

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

  return {
    subscriptions,
    selectedBox,
    handleBoxClick,
  };
};