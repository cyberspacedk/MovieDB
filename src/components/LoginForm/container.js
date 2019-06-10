/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  sendDataForCheck,
  userLogout,
  newRequestToken,
} from '../../Redux/Actions/setUserDataAction';
import {
  isAuthentificated,
  getUserLogin,
} from '../../Redux/Selectors/authReducer';
import LoginForm from './component';

const Header = styled.header`
  display: flex;
  background-color: #383838;
  padding: 10px 15px;
  margin-bottom: 20px;
  form {
    margin-left: auto;
  }
`;

const ContainerForm = ({
  checkToken,
  logoutUser,
  isAuth,
  refreshToken,
  userLogin,
}) => (
  <Header>
    <LoginForm
      auth={checkToken}
      logout={logoutUser}
      isAuth={isAuth}
      refreshToken={refreshToken}
      userLogin={userLogin}
    />
  </Header>
);
const mstp = state => ({
  isAuth: isAuthentificated(state),
  userLogin: getUserLogin(state),
});
const mdtp = {
  checkToken: sendDataForCheck,
  logoutUser: userLogout,
  refreshToken: newRequestToken,
};

export default connect(
  mstp,
  mdtp,
)(ContainerForm);
