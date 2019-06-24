/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Login from './Login';

const HomeWay = ({ isAuthentificated }) => (
  <>{!isAuthentificated ? <Login /> : <Dashboard />}</>
);

HomeWay.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
export default HomeWay;
