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
          <h2 className="card-title flex-grow">{strCategory}</h2>

          <div className="card-actions justify-end">
            <Link
              to={`/category/${strCategory}`}
              state={strCategoryDescription}
            >
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
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={strMealThumb} alt={strMeal} />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex-grow">{strMeal}</h2>

          <div className="card-actions justify-end">
            <Link to={-1}>
              <button className="btn btn-primary">Go Back</button>
            </Link>
            <Link to={`/meal/${idMeal}`}>
              <button className="btn btn-primary">Details</button>
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
