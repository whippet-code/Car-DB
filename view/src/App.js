import { useState, useEffect } from "react";

// import components
import Car from "./components/Car";
import SearchForm from "./components/SearchForm";

// Styles
import "./App.css";

function App() {
  // Need fetch call for cars data to display
  // By default show all cars?
  const [carData, setCarData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  let [url, setUrl] = useState("http://localhost:5000/cars/find/?");

  function getUrl() {
    setUrl(
      (prevState) =>
        (prevState = "http://localhost:5000/cars/find?make=Land%20Rover")
    );
  }

  function getData(url) {
    fetch(url)
      .then((res) => res.json())
      .then(setCarData)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setCarData(undefined);

    getData(url);
  }, [url]);

  // further calls come from searchform comp - Need to pass data & setData as props

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
            {isLoading ? (
              <h1>Loading . . . . </h1>
            ) : isError ? (
              <h1>Error</h1>
            ) : (
              carData.map((car) => <Car key={car._id} {...car} />)
            )}
          </div>
        </div>
      </div>
      <footer>
        <button type="button" onClick={getUrl}>
          Click
        </button>
        <p>Bottom of page holding text</p>
      </footer>
    </>
  );
}

export default App;
