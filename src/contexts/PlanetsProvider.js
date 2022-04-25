import React, { useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../api/planetsAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numericValue, setNumericValue] = useState('0');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  async function getPlanets() {
    const planetsResponse = await fetchPlanets();
    setPlanets(planetsResponse.results);
    // console.log(planetsResponse);
  }

  const onChange = ({ target: { name, value } }) => {
    if (name === 'searchInput') {
      setSearchInput(value);
    } else if (name === 'column') {
      setColumn(value);
    } else if (name === 'comparison') {
      setComparison(value);
    } else if (name === 'numericValue') {
      setNumericValue(value);
    }
  };

  const onClick = () => {
    // console.log('clicado');
    setFilterByNumericValues([
      ...filterByNumericValues,
      { column, comparison, numericValue },
    ]);
    // console.log(filterByNumericValues);

    switch (comparison) {
    case 'maior que':
      return setPlanets(planets
        .filter((planet) => +(planet[column]) > +(numericValue)));
    case 'menor que':
      return setPlanets(planets
        .filter((planet) => +(planet[column]) < +(numericValue)));
    case 'igual a':
      return setPlanets(planets
        .filter((planet) => +(planet[column]) === +(numericValue)));
    default:
    }
  };

  const contextValue = {
    column,
    comparison,
    filterByNumericValues,
    getPlanets,
    numericValue,
    onChange,
    onClick,
    planets,
    searchInput,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};
