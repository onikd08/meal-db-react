import PropTypes from "prop-types";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <section className="flex justify-center items-center">
      <div className="join border">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search By Name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>
    </section>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
export default SearchBar;
