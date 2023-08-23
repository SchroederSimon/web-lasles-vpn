/*import { useEffect, useState } from "react";
import { PricingInfo } from "../interfaces/PricingInfo";
import Pricing from "../pages/Pricing/Pricing";

export const BASE_URL =
  "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

const PricingAPI = () => {
    const [subcriptions, setSubcriptions] = useState<PricingInfo[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/api/subscription`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                setSubcriptions(result);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return <Pricing subscriptions={subcriptions} />;
}

export default PricingAPI;*/
