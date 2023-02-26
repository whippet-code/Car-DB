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
        <label htmlFor="make">Make</label>
        <input
          type="text"
          id="make"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="model"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label htmlFor="registration">Registration</label>
        <input
          type="text"
          id="registration"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label htmlFor="owner">Owner</label>
        <input
          type="text"
          id="owner"
          onChange={(e) => console.log(e.target)}
        ></input>
        <label htmlFor="address">Address</label>
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
