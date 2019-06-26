import React from 'react';
import PropTypes from 'prop-types';
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

WatchListAction.propTypes = {
  handleWatchList: PropTypes.func.isRequired,
  watchListStatus: PropTypes.bool.isRequired,
};

export default WatchListAction;
