import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const { Item, Divider } = Menu;

const Overlay = ({ handleLogout }) => (
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

Overlay.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Overlay;
