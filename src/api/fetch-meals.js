export async function getMeals() {
  try {
    const response = await fetch("http://localhost:5050/meals");
    return await response.json();
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw new Error(error.message || "Failed to fetch meals");
  }
}
