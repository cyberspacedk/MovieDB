import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../shared/Layout';

const WatchList = ({
  watchList,
  loading,
  error,
  empty,
  history,
  totalPage,
  operationsWatchListRequest,
}) => {
  return (
    <PageLayout
      loading={loading}
      empty={empty}
      error={error}
      array={watchList}
      totalResults={totalPage}
      history={history}
      operations={operationsWatchListRequest}
      removeBox
    />
  );
};

WatchList.propTypes = {
  watchList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  history: PropTypes.isRequired,
  operationsWatchListRequest: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
  empty: PropTypes.bool.isRequired,
};

export default WatchList;
