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
import isAuthentificated from '../../Redux/Selectors/authReducer';
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

const ContainerForm = ({ checkToken, logoutUser, isAuth, refreshToken }) => (
  <Header>
    <LoginForm
      auth={checkToken}
      logout={logoutUser}
      isAuth={isAuth}
      refreshToken={refreshToken}
    />
  </Header>
);
const mstp = state => ({
  isAuth: isAuthentificated(state),
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
