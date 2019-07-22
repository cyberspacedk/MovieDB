import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Col, Avatar, Dropdown, Icon } from 'antd';
import Overlay from './Overlay';

const { Text } = Typography;

const UserMenu = ({ username, handleLogout }) => {
  return (
    <Col>
      <Avatar
        icon="user"
        src="https://media.wired.com/photos/5b7350e75fc74d47846ce4e4/master/w_550,c_limit/Popcorn-869302844.jpg"
      />
      <Dropdown overlay={<Overlay handleLogout={handleLogout} />}>
        <Text>
          {username}
          <Icon type="caret-down" />
        </Text>
      </Dropdown>
    </Col>
  );
};

UserMenu.propTypes = {
  username: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default UserMenu;
