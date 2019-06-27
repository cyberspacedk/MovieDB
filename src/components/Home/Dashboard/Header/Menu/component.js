import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Col, Avatar, Dropdown, Icon, Menu } from 'antd';

const { Item, Divider } = Menu;
const { Text } = Typography;

const UserMenu = ({ username, authLogout, history }) => {
  const Overlay = () => (
    <Menu>
      <Item>
        <Link to="/">Dashboard</Link>
      </Item>
      <Divider />
      <Item>
        <Link to="/lists">My Lists</Link>
      </Item>
      <Item>
        <Link to="/watchlist">Watchlist</Link>
      </Item>
      <Item>
        <Link to="/favorites">Favorites</Link>
      </Item>
      <Divider />
      <Item
        onClick={() => {
          authLogout();
          history.push('/');
        }}
      >
        Logout
      </Item>
    </Menu>
  );

  return (
    <Col>
      <Avatar icon="user" />
      <Dropdown overlay={Overlay}>
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
  authLogout: PropTypes.func.isRequired,
  history: PropTypes.shape(PropTypes.object).isRequired,
};

export default UserMenu;
