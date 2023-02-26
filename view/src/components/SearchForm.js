// Search form for cars

//css
import "./componentStyles.css";

const handleSubmit = () => {
  console.log("Search started...");
};
const handleClick = (e) => {
  handleSubmit();
};

function SearchForm() {
  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <label for="make">Make</label>
        <input
          type="text"
          id="make"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label for="model">Model</label>
        <input
          type="text"
          id="model"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label for="registration">Registration</label>
        <input
          type="text"
          id="registration"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label for="type">Type</label>
        <input
          type="text"
          id="type"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label for="color">Color</label>
        <input
          type="text"
          id="color"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label for="owner">Owner</label>
        <input
          type="text"
          id="owner"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label for="address">Address</label>
        <input
          type="text"
          id="address"
          onChange={(e) => console.log(e.target)}
        ></input>
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
