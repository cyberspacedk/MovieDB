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
      removeBox
    />
  );
};

ListDetails.propTypes = {
  detailsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  history: PropTypes.isRequired,
  empty: PropTypes.bool.isRequired,
  listName: PropTypes.string.isRequired,
  deleteMovieFromListRequest: PropTypes.func.isRequired,
};

export default ListDetails;
