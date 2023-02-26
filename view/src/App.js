// import components
import Car from "./components/Car";
import SearchForm from "./components/SearchForm";

// Styles
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
    <>
      <div className="App">
        <div className="leftSide">
          <h1>Find Cars</h1>
          <SearchForm />
        </div>
        <div className="rightSide">
          <h1>Cars Database</h1>
          <div className="cars">
            <Car {...car1} />
            <Car {...car1} />
            <Car {...car1} />
            <Car {...car1} />
            <Car {...car1} />
            <Car {...car1} />
          </div>
        </div>
      </div>
      <footer>
        <p>Bottom of page holding text</p>
      </footer>
    </>
  );
}

export default App;
