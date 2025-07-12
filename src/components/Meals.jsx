import { useMeals } from "../hooks/useMeals";

export default function Meals() {
  const { meals, loading, errorState } = useMeals();

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <li key={meal?.id}>
          <img src={meal?.image} alt={meal?.name} />
          <h3>{meal.name}</h3>
          <p>{meal.description}</p>
          <p>${Number(meal?.price).toFixed(2)}</p>
        </li>
      ))}
    </ul>
  );
}
