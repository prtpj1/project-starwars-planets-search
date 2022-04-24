import React from 'react';
import './App.css';
import PlanetsProvider from './contexts/PlanetsProvider';
import Home from './pages/Home';

function App() {
  return (
    <PlanetsProvider>
      <Home />
    </PlanetsProvider>
  );
}

export default App;
