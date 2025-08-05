export async function getMealById(mealId) {
  try {
    const response = await fetch(`http://localhost:5050/meals/${mealId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch meal with ID: ${mealId}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Failed to fetch meal details");
  }
}
