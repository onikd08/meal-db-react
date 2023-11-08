import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          MealDB
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/areas">Areas</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
