// Car comp

// Store for car type urls -
// 4x4 - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/06_suv-medium_red-1.png
// Compact - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/02_economy_red-1.png
// Saloon - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/04-saloon-standard.png

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
      {/* Do map of car?? for each props render a h4 ? */}
      {Object.values(car).map((entry) => (
        <h5>{entry}</h5>
      ))}
    </div>
  );
}

export default Car;
