/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Typography,
  Row,
  Col,
  Avatar,
  Dropdown,
  Icon,
  Menu,
  Layout,
} from 'antd';

const Header = ({ username, authLogout }) => {
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
    <Layout.Header>
      <Row type="flex" justify="space-between">
        <Col>
          <Typography.Text>THE MOVIE DB</Typography.Text>
        </Col>
        <Col>
          <Avatar icon="user" />

          <Dropdown overlay={Overlay}>
            <Typography.Text>
              {username}
              <Icon type="caret-down" />
            </Typography.Text>
          </Dropdown>
        </Col>
      </Row>
    </Layout.Header>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  authLogout: PropTypes.func.isRequired,
};

export default Header;
