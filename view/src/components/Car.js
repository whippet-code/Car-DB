// Car comp

// Store for car type urls -
// 4x4 - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/06_suv-medium_red-1.png
// Compact - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/02_economy_red-1.png
// Saloon - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/04-saloon-standard.png

function handleDelete(e) {
  console.log("Delete Request " + e.target.value);
  // DELETE fetch call
  // http://localhost:5000/cars/63fd052d2704c13c2c58cfbc
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

function handleEdit(e) {
  console.log("Edit Request " + e.target.value);
}

// Takes props of a car object

function Car({ ...car }) {
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
    default:
      break;
  }
  return (
    <div className="car">
      <img src={typeImg} alt={car.make + " " + car.model} />
      {/* Do map of car?? for each props render a h4. Don't include _id & __v*/}
      {/* {Object.values(car).map((entry, index) => (
        <h5 key={index}>{entry}</h5>
      ))} */}
      {/* Selecgtive render of data */}
      <h4>{car.type}</h4>
      <h4>{car.make}</h4>
      <h4>{car.model}</h4>
      <h4>{car.registration}</h4>
      {car.color ? <h5>Colour: {car.color}</h5> : ""}
      {car.owner ? <h5>Owner: {car.owner}</h5> : ""}
      {car.address ? <h5>Address: {car.address}</h5> : ""}
      <button type="button" value={car._id} onClick={handleEdit}>
        Edit
      </button>
      <button type="button" value={car._id} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Car;
