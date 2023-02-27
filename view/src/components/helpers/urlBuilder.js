function urlBuilder(data, type) {
  // For ADD url use ADD url and concatinate the newCar data object to the end to pass to controller

  // For search query
  // build url for search request from data object passed in.
  // map data and for each key / value pair add to search url

  let url;
  if (type === "ADD") {
    // Stringify the data Obj
    let newCarData = JSON.stringify(data);
    url = "http://localhost:5000/cars/";
    url += newCarData;
  } else if (type === "SEARCH") {
    // serach url
    url = "http://localhost:5000/cars/find/?";
    // itterate data and build search query url
    for (const [key, value] of Object.entries(data)) {
      url = url + key + "=" + value.replaceAll(" ", "%20") + "&&";
    }
  }
  return url;
}

export default urlBuilder;
