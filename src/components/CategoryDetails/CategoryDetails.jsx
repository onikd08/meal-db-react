import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const CategoryDetails = () => {
  const meals = useLoaderData();

  return (
    <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {meals?.meals?.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default CategoryDetails;
