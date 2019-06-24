import React, { useState } from 'react';
import { Icon } from 'antd';

const WatchListAction = () => {
  const [watchListStatus, setWatchList] = useState(false);

  const handleFavorite = () => setWatchList(!watchListStatus);

  return (
    <Icon
      type="book"
      theme={watchListStatus ? 'filled' : undefined}
      onClick={handleFavorite}
    />
  );
};

export default WatchListAction;
