import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../shared/Layout';

const ListDetails = ({
  loading,
  empty,
  error,
  detailsList,
  history,
  listName,
  deleteMovieFromListRequest,
}) => {
  return (
    <PageLayout
      title={listName}
      loading={loading}
      empty={empty}
      error={error}
      array={detailsList}
      history={history}
      operations={deleteMovieFromListRequest}
    />
  );
};

ListDetails.propTypes = {
  detailsList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  history: PropTypes,
  empty: PropTypes.bool,
  listName: PropTypes.string,
  deleteMovieFromListRequest: PropTypes.func,
};

export default ListDetails;
