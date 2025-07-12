export async function getMeals() {
  try {
    const response = await fetch("http://localhost:5050/meals");

    if (!response.ok) throw new Error("Failed to fetch meals");

    return await response.json();
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error.message;
  }
}
