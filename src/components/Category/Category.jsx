import PropTypes from "prop-types";
import Card from "../Card/Card";

const Category = ({ category }) => {
  return (
    <div>
      <Card category={category}></Card>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
