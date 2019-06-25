/* eslint-disable react/prop-types */
import React from 'react';
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

export default FavoriteAction;
