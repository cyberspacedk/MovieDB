import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Movie from '../../Movie';
import MyLists from '../../MyLists';
import ListDetails from '../../MyLists/ListDetails';
import Favorites from '../../Favorites';
import Watchlist from '../../Watchlist';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/lists/" component={MyLists} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/watchlist" component={Watchlist} />
        <Route exact path="/lists/:id" component={ListDetails} />
        <Route path="/:id" component={Movie} />
      </Switch>
    </div>
  );
};

export default Dashboard;
