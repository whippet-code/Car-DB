function urlBuilder(data) {
  // build url for search request from data object passed in.
  // map data and for each key / value pair add to search url

  //base url http://localhost:5000/cars/find/?
  let url = "http://localhost:5000/cars/find/?";

  for (const [key, value] of Object.entries(data)) {
    url = url + key + "=" + value.replaceAll(" ", "%20") + "&&";
  }
  return url;
}

export default urlBuilder;
