import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ category, meal }) => {
  if (category) {
    const { strCategory, strCategoryThumb, strCategoryDescription } = category;
    return (
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={strCategoryThumb} alt={strCategory} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strCategory}</h2>
          <p>{strCategoryDescription.slice(0, 50)}</p>
          <div className="card-actions justify-end">
            <Link to={`/category/${strCategory}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  if (meal) {
    const { strMeal, strMealThumb, idMeal } = meal;
    return (
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={strMealThumb} alt={strMeal} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{strMeal}</h2>
          <div className="flex gap-5">
            <Link to={`/meal/${idMeal}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
            <Link to={-1}>
              <button className="btn btn-primary">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  category: PropTypes.object,
  meal: PropTypes.object,
};

export default Card;
