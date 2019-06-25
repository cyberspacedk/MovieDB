import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Movie from '../../Movie';
import Favorites from '../../Favorites';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/:id" component={Movie} />
      </Switch>
    </div>
  );
};

export default Dashboard;
