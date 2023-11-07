import { Link, useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const data = useLoaderData();
  const meal = data.meals[0];
  const {
    strArea,
    strCategory,
    strInstructions,
    strMeal,
    strMealThumb,
    strTags,
    strYoutube,
  } = meal;
  return (
    <section className="container mx-auto mt-10 lg:mt-0 flex justify-center items-center h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="flex-1">
          <img src={strMealThumb} alt={strMealThumb} />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title">{strMeal}</h2>
          <span>({strArea})</span>
          <small>{strCategory}</small>
          <p>{strInstructions}</p>
          <small>{strTags}</small>
          <div className="card-actions justify-end">
            <Link to={strYoutube}>
              <button className="btn btn-primary">Watch on youtube</button>
            </Link>
            <Link to={-1}>
              <button className="btn btn-primary">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealDetails;
