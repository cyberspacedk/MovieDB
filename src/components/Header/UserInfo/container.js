import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInfo from './component';
import { userLogout } from '../../../store/authentifiction/actions';
import {
  getUserLogin,
  isAuthentificated,
} from '../../../store/authentifiction/selectors';

// eslint-disable-next-line no-shadow
const ContainerUserInfo = ({ username, userLogout }) => {
  return <UserInfo userName={username} logout={userLogout} />;
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
  userLogout: PropTypes.func.isRequired,
};

export default connect(
  mstp,
  mdtp,
)(ContainerUserInfo);
