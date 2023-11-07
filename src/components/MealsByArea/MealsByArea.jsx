import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const MealsByArea = () => {
  const data = useLoaderData();

  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto">
      {data.meals.map((meal) => (
        <Card meal={meal} key={meal.idMeal}></Card>
      ))}
    </div>
  );
};

export default MealsByArea;
