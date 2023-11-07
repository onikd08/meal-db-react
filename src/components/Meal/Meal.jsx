import PropTypes from "prop-types";
import Card from "../Card/Card";

const Meal = ({ meal }) => {
  return <Card meal={meal}></Card>;
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default Meal;
