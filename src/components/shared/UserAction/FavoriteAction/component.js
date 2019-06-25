import React, { useState } from 'react';
import { Icon } from 'antd';

const FavoriteAction = () => {
  const [favoriteStatus, setFavorite] = useState(false);
  const handleFavorite = () => setFavorite(!favoriteStatus);

  return (
    <Icon
      type="heart"
      theme={favoriteStatus ? 'filled' : undefined}
      onClick={handleFavorite}
    />
  );
};

export default FavoriteAction;
