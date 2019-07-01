import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../shared/Layout';

const ListDetails = ({
  loading,
  empty,
  error,
  listDetails,
  history,
  listName,
}) => {
  return (
    <PageLayout
      title={listName}
      loading={loading}
      empty={empty}
      error={error}
      array={listDetails}
      history={history}
    />
  );
};

ListDetails.propTypes = {
  listDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  history: PropTypes.isRequired,
  empty: PropTypes.bool.isRequired,
  listName: PropTypes.string.isRequired,
};

export default ListDetails;
