import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInfo from './component';
import { DELETE_SESSION_ID_PATH } from '../../../api';
import { userLogout } from '../../../Redux/Store/authentifiction/actions';
import {
  getUserLogin,
  isAuthentificated,
} from '../../../Redux/Store/authentifiction/selectors';

// eslint-disable-next-line no-shadow
const ContainerUserInfo = ({ username, userLogout, sessionID }) => {
  const handleLogout = () => {
    userLogout(DELETE_SESSION_ID_PATH, sessionID);
  };

  return <UserInfo userName={username} logout={handleLogout} />;
};

const mstp = state => ({
  username: getUserLogin(state),
  sessionID: isAuthentificated(state),
});
const mdtp = {
  userLogout,
};

ContainerUserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  sessionID: PropTypes.string.isRequired,
  userLogout: PropTypes.func.isRequired,
};

export default connect(
  mstp,
  mdtp,
)(ContainerUserInfo);
