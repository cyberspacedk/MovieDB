/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Col, Avatar, Dropdown, Icon, Menu } from 'antd';

const UserMenu = ({ username, authLogout }) => {
  const Overlay = () => (
    <Menu>
      <Menu.Item>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to="/lists">My Lists</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/watchlist">Watchlist</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={authLogout}>Logout</Menu.Item>
    </Menu>
  );

  return (
    <Col>
      <Avatar icon="user" />
      <Dropdown overlay={Overlay}>
        <Typography.Text>
          {username}
          <Icon type="caret-down" />
        </Typography.Text>
      </Dropdown>
    </Col>
  );
};

UserMenu.propTypes = {
  username: PropTypes.string.isRequired,
  authLogout: PropTypes.func.isRequired,
};

export default UserMenu;
