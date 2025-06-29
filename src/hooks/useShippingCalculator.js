import { useState } from "react";

const useShippingCalculator = (cities) => {
  const [isMore, setIsMore] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculateShipping = (data) => {
    setLoading(true);
    setResult(null);

    try {
      const city = cities.find((city) => +city.id === +data.city);
      if (!city) throw new Error("City not found");

      let finalCost;
      if (isMore) {
        const volume = (+data.length * +data.width * +data.height) / 6000;
        const chargeableWeight = Math.max(+data.weight, volume);
        finalCost = chargeableWeight * city.delivery_cost;
      } else {
        finalCost = +data.weight * city.delivery_cost;
      }

      setResult(finalCost.toFixed(2));
    } catch (error) {
      console.error("Shipping calculation failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isMore,
    setIsMore,
    result,
    loading,
    calculateShipping,
  };
};

export default useShippingCalculator;
