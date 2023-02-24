// Car comp
// Takes props of a car object

function Car({ car }) {
  return (
    <div className="car">
      <img src={car.url} alt="{car.make}"></img>
      <h3>{car.make}</h3>
      <h4>{car.model}</h4>
      <h4>{car.registration}</h4>
      <h5>{car.owner}</h5>
      <h5>{car.address}</h5>
    </div>
  );
}

export default Car;
