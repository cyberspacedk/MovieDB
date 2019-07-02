import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../shared/Layout';

const WatchList = ({
  watchList,
  loading,
  error,
  empty,
  history,
  goToNextPage,
  totalResults,
  operationsWatchListRequest,
}) => {
  return (
    <PageLayout
      title="Watchlist"
      loading={loading}
      empty={empty}
      error={error}
      array={watchList}
      goToNextPage={goToNextPage}
      totalResults={totalResults}
      history={history}
      operations={operationsWatchListRequest}
      removeBox
    />
  );
};

WatchList.propTypes = {
  watchList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  history: PropTypes,
  operationsWatchListRequest: PropTypes.func,
  totalResults: PropTypes.number,
  empty: PropTypes.bool,
  goToNextPage: PropTypes.func,
};

export default WatchList;
