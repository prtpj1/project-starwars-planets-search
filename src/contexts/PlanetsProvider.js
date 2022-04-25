import React, { useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../api/planetsAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  async function getPlanets() {
    const planetsResponse = await fetchPlanets();
    setPlanets(planetsResponse.results);
    // console.log(planetsResponse);
  }

  const onChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const contextValue = {
    getPlanets,
    onChange,
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
