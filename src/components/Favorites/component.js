import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../shared/Layout';

const Favorites = ({
  favoritesList,
  loading,
  error,
  empty,
  history,
  operationsFavoritesRequest,
  totalPage,
}) => {
  return (
    <PageLayout
      title="Favorites"
      loading={loading}
      empty={empty}
      error={error}
      array={favoritesList}
      totalResults={totalPage}
      history={history}
      operations={operationsFavoritesRequest}
    />
  );
};

Favorites.propTypes = {
  favoritesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  history: PropTypes.isRequired,
  operationsFavoritesRequest: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
  empty: PropTypes.bool.isRequired,
};

export default Favorites;
