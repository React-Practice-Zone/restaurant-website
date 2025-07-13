import { useState, useCallback } from "react";
import createOrder from "../api/create-order";

export function useCreateOrder() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, setErrorState] = useState(null);

  const createdOrder = useCallback(async (orderData, cartContext) => {
    setIsLoading(true);
    setErrorState(null);

    try {
      await createOrder(orderData, cartContext);
      return { success: true };
    } catch (error) {
      setErrorState(error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setErrorState(null);
  }, []);

  return {
    createdOrder,
    isLoading,
    errorState,
    clearError,
  };
}
