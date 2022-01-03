import "./SearchField.css";
export const SearchField = (props) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="Search..."
        onChange={props.searchHandler}
        value={props.searchValue}
      />
    </div>
  );
};
