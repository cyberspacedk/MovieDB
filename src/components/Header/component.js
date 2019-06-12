import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import LoginForm from './LoginForm';

const Header = styled.header`
  display: flex;
  background-color: #383838;
  padding: 10px 15px;
  margin-bottom: 20px;
  justify-content: flex-end;
`;

const ParentForm = ({ isLogin }) => (
  <Header>{!isLogin ? <LoginForm /> : <UserInfo />}</Header>
);

ParentForm.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
export default ParentForm;
