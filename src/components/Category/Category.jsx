import PropTypes from "prop-types";
import Card from "../Card/Card";

const Category = ({ category }) => {
  return <Card category={category}></Card>;
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
