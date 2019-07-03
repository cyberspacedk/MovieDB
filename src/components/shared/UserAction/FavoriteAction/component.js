import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const FavoriteAction = ({ handleFavorite, favoriteStatus }) => {
  return (
    <Icon
      type="heart"
      theme={favoriteStatus ? 'filled' : undefined}
      onClick={handleFavorite}
    />
  );
};

FavoriteAction.propTypes = {
  handleFavorite: PropTypes.func,
  favoriteStatus: PropTypes.bool,
};

export default FavoriteAction;
