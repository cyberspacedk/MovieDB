import React from 'react';
import PropTypes from 'prop-types';

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

const Header = ({ username, userLogout }) => {
  const Overlay = () => (
    <Menu>
      <Menu.Item>Dashboard</Menu.Item>
      <Menu.Item>My Lists</Menu.Item>
      <Menu.Item onClick={userLogout}>Logout</Menu.Item>
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
  userLogout: PropTypes.func.isRequired,
};

export default Header;
