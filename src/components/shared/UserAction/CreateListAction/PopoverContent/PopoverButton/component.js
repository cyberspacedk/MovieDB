import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const PopoverButton = ({ item, handlerAddMovieToList }) => (
  <Button type="link" onClick={handlerAddMovieToList}>
    {item.name}
  </Button>
);

PopoverButton.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object),
  handlerAddMovieToList: PropTypes.func,
};

export default PopoverButton;
