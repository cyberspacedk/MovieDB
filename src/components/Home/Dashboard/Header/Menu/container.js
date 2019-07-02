import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import UserMenu from './component';
import { authLogout } from '../../../../../store/authentifiction/actions';
import { getUserLogin } from '../../../../../store/authentifiction/selectors';

// eslint-disable-next-line no-shadow
const MenuContainer = ({ authLogout, history, username }) => {
  const handleLogout = () => {
    authLogout();
    history.push('/');
  };

  return <UserMenu username={username} handleLogout={handleLogout} />;
};

MenuContainer.propTypes = {
  authLogout: PropTypes.func.isRequired,
  history: PropTypes.shape(PropTypes.object),
  username: PropTypes.string.isRequired,
};

const mstp = state => ({
  username: getUserLogin(state),
});

const mdtp = {
  authLogout,
};

export default compose(
  connect(
    mstp,
    mdtp,
  ),
  withRouter,
)(MenuContainer);
