import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../Dashboard';
import LoginForm from '../Login';

const HomeWay = ({ isLogin }) => (
  <>{!isLogin ? <LoginForm /> : <Dashboard />}</>
);

HomeWay.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
export default HomeWay;
