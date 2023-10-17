import searchIcon from "../assets/search.svg";
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

export default Searchbar;
