import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Login from './Login';

const Home = ({ isAuthentificated }) => (
  <>{!isAuthentificated ? <Login /> : <Dashboard />}</>
);

Home.propTypes = {
  isAuthentificated: PropTypes.bool,
};
export default Home;
