import { useState } from "react";

function Form({ ...car }) {
  //initialise state for edit car data object (equal to car object passed via props) - to be completed by form fields
  const [carData, setCarData] = useState({ ...car });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const editData = (values) => ({ ...values, [name]: value });
    setCarData(editData);
  };

  const handleSubmit = () => {
    fetch(`http://localhost:5000/cars/${car.registration}`, {
      method: "PATCH",
      body: JSON.stringify(carData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => console.log(`Car added - ${res}`))
      .then(window.location.reload(true)) // "force" page rerender to update cars display.
      .catch((err) => console.error(`Error with request - ${err}`));
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
        <select name="type" id="type" onChange={handleChange}>
          <option value="">Any</option>
          <option value="4x4">4x4</option>
          <option value="saloon">Saloon</option>
          <option value="compact">Compact</option>
          <option value="sports">Sports</option>
          <option value="van">Van</option>
        </select>
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
        <button type="submit" id="editCar" onClick={handleSubmit}>
          Update Car
        </button>
      </form>
    </div>
  );
}

export default Form;
