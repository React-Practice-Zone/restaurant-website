import { useEffect, useState } from "react";
import { getMealById } from "../api/fetch-meal-details";

export function useMealDetails(mealId) {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    if (!mealId) {
      setLoading(false);
      return;
    }

    async function fetchMealDetails() {
      try {
        setLoading(true);
        setErrorState(null);
        const data = await getMealById(mealId);
        setMeal(data);
      } catch (error) {
        setErrorState(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMealDetails();
  }, [mealId]);

  return { meal, loading, errorState };
}
