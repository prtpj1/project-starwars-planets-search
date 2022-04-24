const urlPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchPlanets() {
  const response = await fetch(urlPlanets);
  const data = await response.json();
  return data;
}

export default fetchPlanets;
