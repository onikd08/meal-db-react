import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={strCategoryThumb} alt="Category" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strCategory}</h2>
        <p>{strCategoryDescription.slice(0, 50)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
