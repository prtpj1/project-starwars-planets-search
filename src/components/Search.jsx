import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Search() {
  const {
    onChange,
    searchInput,
  } = useContext(PlanetsContext);
  console.log(searchInput);
  return (
    <>
      Planet Search:
      <input
        data-testid="name-filter"
        onChange={ onChange }
        placeholder="Search for a planet"
        type="text"
        value={ searchInput }
      />
    </>
  );
}

export default Search;
