import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          MealDB
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/areas">Areas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
