import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../shared/Layout';

const Favorites = ({
  favoritesList,
  loading,
  error,
  empty,
  history,
  goToNextPage,
  operationsFavoritesRequest,
  totalResults,
}) => {
  return (
    <PageLayout
      title="Favorites"
      error={error}
      loading={loading}
      array={favoritesList}
      goToNextPage={goToNextPage}
      totalResults={totalResults}
      empty={empty}
      history={history}
      operations={operationsFavoritesRequest}
      removeBox
    />
  );
};

Favorites.propTypes = {
  favoritesList: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  history: PropTypes,
  operationsFavoritesRequest: PropTypes.func,
  totalResults: PropTypes.number,
  empty: PropTypes.bool,
  goToNextPage: PropTypes.func,
};

export default Favorites;
