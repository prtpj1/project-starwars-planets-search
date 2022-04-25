import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Search() {
  const {
    column,
    comparison,
    onChange,
    onClick,
    searchInput,
    numericValue,
  } = useContext(PlanetsContext);
  // console.log(searchInput);
  return (
    <>
      Planet Search:
      <input
        data-testid="name-filter"
        name="searchInput"
        onChange={ onChange }
        placeholder="Search for a planet"
        type="text"
        value={ searchInput }
      />

      <select
        data-testid="column-filter"
        name="column"
        onChange={ onChange }
        value={ column }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ onChange }
        value={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        name="numericValue"
        onChange={ onChange }
        type="number"
        value={ numericValue }
      />
      <button
        data-testid="button-filter"
        onClick={ onClick }
        type="button"
      >
        Search
      </button>
    </>
  );
}

export default Search;
