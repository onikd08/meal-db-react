import { useLoaderData, useLocation } from "react-router-dom";
import Meal from "../Meal/Meal";

const CategoryDetails = () => {
  const meals = useLoaderData();
  const { state } = useLocation();
  const categoryDescription = state;

  return (
    <section className="container mx-auto">
      <h3 className="text-xl text-center mt-10">{categoryDescription}</h3>
      <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meals?.meals?.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </section>
  );
};

export default CategoryDetails;
