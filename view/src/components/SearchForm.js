// Search form for cars
import { useState } from "react";

//import url builder helper function
import urlBuilder from "./helpers/urlBuilder.js";

//css
import "./componentStyles.css";

// props url=url setUrl=setUrl
function SearchForm(props) {
  const [searchData, setSearchData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newSearch = (values) => ({ ...values, [name]: value });
    setSearchData(newSearch);
  };

  // prevent default form action upon submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    // create url for submitting call
    let newUrl = urlBuilder(searchData);
    props.setUrl(newUrl);
    // update url for datasearch (should cause rerender of page)

    // update window (ie. re render App)
    // window.location.reload(true);
  };

  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="make">Make</label>
        <input
          type="text"
          id="make"
          name="make"
          onChange={handleChange}
        ></input>
        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="model"
          name="model"
          onChange={handleChange}
        ></input>
        <label htmlFor="registration">Registration</label>
        <input
          type="text"
          id="registration"
          name="registration"
          onChange={handleChange}
        ></input>
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          name="type"
          onChange={handleChange}
        ></input>
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          name="color"
          onChange={handleChange}
        ></input>
        <label htmlFor="owner">Owner</label>
        <input
          type="text"
          id="owner"
          name="owner"
          onChange={handleChange}
        ></input>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
