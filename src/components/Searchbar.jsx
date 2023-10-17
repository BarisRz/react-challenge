import searchIcon from "../assets/search.svg";
import PropTypes from "prop-types";
function Searchbar({ searchValue, setSearchValue }) {
  return (
    <div className="searchbar">
      <img src={searchIcon} alt="loupe" />
      <input
        type="search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
    </div>
  );
}
Searchbar.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};
export default Searchbar;
