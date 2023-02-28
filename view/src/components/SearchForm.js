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
    // define newUrl for search req
    let newUrl = "http://localhost:5000/cars/find/?";
    // create url for submitting call (depends on if search or new car button clicked)
    if (e.target.id === "search") {
      newUrl = urlBuilder(searchData, "SEARCH");
    } else if (e.target.id === "newCar") {
      //ensure required fields are filled in (type, make, model, registration)
      if (
        searchData.type &&
        searchData.make &&
        searchData.model &&
        searchData.registration
      ) {
        // POST fetch call
        fetch("http://localhost:5000/cars/", {
          method: "POST",
          body: JSON.stringify(searchData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => console.log(`Car added - ${res}`))
          .then(window.location.reload(true)) // "force" page rerender to update cars display.
          .catch((err) => console.error(`Error with request - ${err}`));
        // Form not completed for DB to accept data
      } else alert("Please fill in the required fields to add a new car");
    }
    // update url (should cause rerender of page if url has changed (search will do this))
    props.setUrl(newUrl);
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
          type="number"
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
        <button type="submit" id="search" onClick={handleSubmit}>
          Search
        </button>
        <button type="submit" id="newCar" onClick={handleSubmit}>
          New Car
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
