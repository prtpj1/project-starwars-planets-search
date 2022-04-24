import React, { useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../api/planetsAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  async function getPlanets() {
    const planetsResponse = await fetchPlanets();
    setPlanets(planetsResponse.results);
    // console.log(planetsResponse);
  }

  const contextValue = {
    getPlanets,
    planets,
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
