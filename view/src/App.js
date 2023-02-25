import Car from "./components/Car";
// Store for car type urls -
// 4x4 - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/06_suv-medium_red-1.png
// Compact - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/02_economy_red-1.png
// Saloon - https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/04-saloon-standard.png

import "./App.css";

function App() {
  // testing obj
  const car1 = {
    url: "https://www.kayak.co.uk/c/wp-content/uploads/sites/198/2020/09/06_suv-medium_red-1.png",
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
