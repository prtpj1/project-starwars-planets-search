// import apiResult from '../apitResult.json';

const urlPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  const response = await fetch(urlPlanets);
  const data = await response.json();
  return data;

  // const data = apiResult;
  // return data;
}

export default fetchPlanets;
