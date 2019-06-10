import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Forma from './forma';
import UserInfo from './userInfo';

const Header = styled.header`
  display: flex;
  background-color: #383838;
  padding: 10px 15px;
  margin-bottom: 20px;
  justify-content: flex-end;
`;

const ParentForm = ({ isLogin }) => (
  <Header>{!isLogin ? <Forma /> : <UserInfo />}</Header>
);

ParentForm.propTypes = {
  isLogin: PropTypes.string.isRequired,
};
export default ParentForm;
