import Car from "./components/Car";

import "./App.css";

function App() {
  // testing obj
  const car1 = {
    url: "https://en.wikipedia.org/wiki/Land_Rover_Freelander#/media/File:2013_Land_Rover_Freelander_Dynamic_SD4_Automatic_2.2_Front.jpg",
    make: "Land Rover",
    model: 2010,
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
