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

  function getData(url) {
    console.log(`GetData call url - ${url}`);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCarData(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setCarData(undefined);

    getData(url);
  }, [url]);

  // further calls come from searchform comp - Need to pass data & setData as props to SearchForm comp.

  return (
    <>
      <div className="App">
        <div className="leftSide">
          <h1>Find Cars</h1>
          <SearchForm url={url} setUrl={setUrl} />
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
        <p>Bottom of page holding text</p>
      </footer>
    </>
  );
}

export default App;
