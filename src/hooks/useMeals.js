import { useEffect, useState } from "react";
import { getMeals } from "../api/fetch-meals";

export function useMeals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    async function fetchMealsFromApi() {
      try {
        const data = await getMeals();
        setMeals(data);
      } catch (error) {
        setErrorState(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMealsFromApi();
  }, []);

  return { meals, loading, errorState };
}
