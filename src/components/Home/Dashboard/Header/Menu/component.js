import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Col, Avatar, Dropdown, Icon, Menu } from 'antd';

const { Item, Divider } = Menu;
const { Text } = Typography;

const UserMenu = ({ username, handleLogout }) => {
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
      <Item onClick={handleLogout}>Logout</Item>
    </Menu>
  );

  return (
    <Col>
      <Avatar
        icon="user"
        src="https://media.wired.com/photos/5b7350e75fc74d47846ce4e4/master/w_550,c_limit/Popcorn-869302844.jpg"
      />
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
  handleLogout: PropTypes.func.isRequired,
};

export default UserMenu;
