import Car from "./components/Car";

import "./App.css";

function App() {
  // testing obj
  const car1 = {
    make: "Land Rover",
    model: 2010,
    type: "4x4",
    color: "Moon Silver",
    registration: "PP34FDS",
    owner: "Roger Jones",
    address: "123 Alphaville US",
  };

  return (
    <div className="App">
      <div className="top"></div>
      <div className="cars">
        <Car {...car1} />
      </div>
    </div>
  );
}

export default App;
