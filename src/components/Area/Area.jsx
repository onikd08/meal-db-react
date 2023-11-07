import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Area = ({ area }) => {
  return (
    <div className="p-5 rounded-lg bg-primary text-primary-content">
      <Link
        to={`/area/${area}`}
        className="text-center text-xl underline cursor-pointer"
      >
        {area}
      </Link>
    </div>
  );
};

Area.propTypes = {
  area: PropTypes.string.isRequired,
};
export default Area;
