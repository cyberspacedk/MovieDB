import React from 'react';
import Header from './Header';
import SearchPanel from './Content/SearchMovies';
import Content from './Content';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <SearchPanel />
      <Content />
    </div>
  );
};

export default Dashboard;
