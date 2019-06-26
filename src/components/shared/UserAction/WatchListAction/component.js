/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from 'antd';

const WatchListAction = ({ handleWatchList, watchListStatus }) => {
  return (
    <Icon
      type="book"
      theme={watchListStatus ? 'filled' : undefined}
      onClick={handleWatchList}
    />
  );
};

export default WatchListAction;
