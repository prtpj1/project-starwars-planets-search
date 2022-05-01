import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../api/planetsAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    numericValue: '0',
  });

  async function getPlanets() {
    const planetsResponse = await fetchPlanets();
    setPlanets(planetsResponse.results);
    // console.log(planetsResponse);
  }

  useEffect(() => {
    console.log(filterByNumericValues);
  }, [filterByNumericValues]);

  const onChange = ({ target: { name, value } }) => {
    if (name === 'searchInput') {
      setSearchInput(value);
    } else if (name === 'column') {
      setSelected({ ...selected, column: value });
    } else if (name === 'comparison') {
      setSelected({ ...selected, comparison: value });
    } else if (name === 'numericValue') {
      setSelected({ ...selected, numericValue: value });
    }
  };

  const handleData = (rows) => {
    const bools = [];

    filterByNumericValues.forEach((filter) => {
      switch (filter.comparison) {
      case 'maior que':
        bools.push(+(rows[filter.column]) > +(filter.numericValue));
        break;
      case 'menor que':
        bools.push(+(rows[filter.column]) < +(filter.numericValue));
        break;
      case 'igual a':
        bools.push(+(rows[filter.column]) === +(filter.numericValue));
        break;
      default:
        return true;
      }
    });
    return bools.every((validRow) => validRow);
  };

  const handleOptions = (option) => !filterByNumericValues
    .find((filter) => filter.column === option);

  const onClickAddFilter = () => {
    setFilterByNumericValues([...filterByNumericValues, selected]);
    setSelected({
      column: 'population',
      comparison: 'maior que',
      numericValue: '0' });
  };

  const onClickResetFilter = () => {
    setFilterByNumericValues([]);
    setSelected({
      column: 'population',
      comparison: 'maior que',
      numericValue: '0' });
  };

  const contextValue = {
    filterByNumericValues,
    getPlanets,
    handleData,
    handleOptions,
    onChange,
    onClickResetFilter,
    onClickAddFilter,
    planets,
    searchInput,
    selected,
    setFilterByNumericValues,
    setSelected,
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
