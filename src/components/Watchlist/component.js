import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
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
  const removeWatchModal = (e, id) => {
    e.stopPropagation();
    Modal.confirm({
      title: 'Do you want to delete movie from watchlist?',
      onOk() {
        operationsWatchListRequest(id, false);
      },
      onCancel() {},
    });
  };

  return (
    <PageLayout
      loading={loading}
      empty={empty}
      error={error}
      array={watchList}
      totalResults={totalPage}
      history={history}
      operations={removeWatchModal}
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
