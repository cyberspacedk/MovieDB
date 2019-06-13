import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styled from 'styled-components';

const UserStatus = styled.div`
  > span {
    color: #f300ff;
    margin-right: 10px;
    font-weight: 700;
  }
`;
const UserInfo = ({ username, userLogout }) => (
  <UserStatus>
    <span>{username}</span>
    <Button type="primary" onClick={userLogout}>
      Logout
    </Button>
  </UserStatus>
);

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  userLogout: PropTypes.func.isRequired,
};

export default UserInfo;
