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
  currentPage,
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
      currentPage={currentPage}
      goToNextPage={goToNextPage}
      totalResults={totalResults}
      history={history}
      operations={operationsWatchListRequest}
      removeBox
    />
  );
};
WatchList.defaultProps = {
  currentPage: 0,
  totalResults: 0,
  history: {
    push: () => {},
  },
};

WatchList.propTypes = {
  watchList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  operationsWatchListRequest: PropTypes.func.isRequired,
  totalResults: PropTypes.number,
  empty: PropTypes.bool.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
};

export default WatchList;
