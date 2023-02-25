// Car comp
// Takes props of a car object

function Car({ ...car }) {
  return (
    <div className="car">
      <img src={car.url} alt={car.make + " " + car.model} />
      {/* Do map of car?? for each props render a h4 ? */}
      {Object.values(car).map((entry) => (
        <h5>{entry}</h5>
      ))}
    </div>
  );
}

export default Car;
