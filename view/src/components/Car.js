// Car comp

// state needed to track isEdit
import { useState } from "react";

//imp componenets
import Form from "./Form";

// Store for car type urls -
// 4x4 - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/06_suv-medium_red-1.png
// Compact - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/02_economy_red-1.png
// Saloon - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/04-saloon-standard.png

// Takes props of a car object
// conditional render (if Edit button is clicked (isEdit == true)) then render edit form. Else render car info
function Car({ ...car }) {
  // State to track isEdit and carData
  let [isEdit, setIsEdit] = useState(false);

  // func to handle delete button click
  function handleDelete(e) {
    console.log("Delete Request " + e.target.value);
    // DELETE fetch call
    fetch("http://localhost:5000/cars/", {
      method: "DELETE",
      body: JSON.stringify({
        id: e.target.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => console.log(`Car deleted - ${res}`))
      .then(window.location.reload(true)) // "force" page rerender to update cars display.
      .catch((err) => console.error(`Error with request - ${err}`));
  }

  // func to handle edit button click
  function handleEdit(e) {
    console.log("Edit Request " + e.target.value);
    // update isEdit state to cause render of edit form comp
    setIsEdit((prevState) => (prevState = !prevState));
  }

  // set image using car.type value.
  let typeImg;
  switch (car.type) {
    case "4x4":
      typeImg =
        "https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/06_suv-medium_red-1.png";
      break;
    case "compact":
      typeImg =
        "https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/02_economy_red-1.png";
      break;
    case "saloon":
      typeImg =
        "https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/04-saloon-standard.png";
      break;
    case "sports":
      typeImg =
        "https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/08_convertible_black-1.png";
      break;
    default:
      typeImg =
        "https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/07_van_black-1.png";
      break;
  }
  return isEdit ? (
    <div className="car">
      <Form {...car} />
    </div>
  ) : (
    <div className="car">
      <img src={typeImg} alt={car.make + " " + car.model} />
      <br></br>
      {/* Selective render of data */}
      <button type="button" value={car._id} onClick={handleEdit}>
        Edit
      </button>
      <button type="button" value={car._id} onClick={handleDelete}>
        Delete
      </button>
      <h4>{car.type}</h4>
      <h4>{car.make}</h4>
      <h4>{car.model}</h4>
      <h4>{car.registration}</h4>
      {car.color ? <h5>Colour: {car.color}</h5> : ""}
      {car.owner ? <h5>Owner: {car.owner}</h5> : ""}
      {car.address ? <h5>Address: {car.address}</h5> : ""}
    </div>
  );
}

export default Car;
