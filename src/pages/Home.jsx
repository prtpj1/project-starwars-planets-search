import React from 'react';
import Search from '../components/Search';
import Table from '../components/Table';

function Home() {
  return (
    <div>
      <h1>StarWars - Planet Search</h1>
      <Search />
      <Table />
    </div>
  );
}

export default Home;
