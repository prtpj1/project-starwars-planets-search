import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Search() {
  const {
    filterByNumericValues,
    handleOptions,
    onChange,
    onClickResetFilter,
    onClickAddFilter,
    searchInput,
    selected,
    setFilterByNumericValues,
  } = useContext(PlanetsContext);
  // console.log(searchInput);

  const columnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];
  return (
    <>
      Planet Search:
      <input
        data-testid="name-filter"
        name="searchInput"
        onChange={ onChange }
        placeholder="Type a planet name..."
        type="text"
        value={ searchInput }
      />

      <select
        data-testid="column-filter"
        name="column"
        onChange={ onChange }
        value={ selected.column }
      >
        {columnOptions.filter(handleOptions).map((optColumn) => (
          <option key={ optColumn } value={ optColumn }>
            { optColumn }
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ onChange }
        value={ selected.comparison }
      >
        {comparisonOptions.map((optComparison) => (
          <option key={ optComparison } value={ optComparison }>
            { optComparison }
          </option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        name="numericValue"
        onChange={ onChange }
        type="number"
        value={ selected.numericValue }
      />
      <button
        data-testid="button-filter"
        onClick={ onClickAddFilter }
        type="button"
      >
        Add Filter
      </button>
      <button
        data-testid="button-remove-filters"
        onClick={ onClickResetFilter }
        type="button"
      >
        Reset Filters
      </button>
      <ul>
        {filterByNumericValues.map((filter, index) => (
          <li
            data-testid="filter"
            key={ index }
          >
            {/* https://flaviocopes.com/how-to-uppercase-first-letter-javascript/ */}
            {`Filter: 
            ${(filter.column).charAt(0).toUpperCase() + (filter.column).slice(1)}
            ${filter.comparison} ${filter.numericValue} `}
            <button
              onClick={ () => {
                const cloneArray = [...filterByNumericValues];
                cloneArray.splice(index, 1);
                setFilterByNumericValues(cloneArray);
              } }
              type="button"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Search;
