export default function MealItem({ meal }) {
  return (
    <li key={meal?.id} className="meal-item">
      <article>
        {/* // ! remember about how to import images from backend */}
        <img src={`http://localhost:5050/${meal.image}`} alt={meal.name} />
        <div className="">
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${Number(meal.price).toFixed(2)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add to cart</button>
        </p>
      </article>
    </li>
  );
}
