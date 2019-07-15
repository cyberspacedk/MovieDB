import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../shared/Layout';

const Favorites = ({
  favorites,
  loading,
  error,
  empty,
  history,
  goToNextPage,
  currentPage,
  operationsFavoritesRequest,
  totalResults,
}) => {
  return (
    <PageLayout
      title="Favorites"
      error={error}
      loading={loading}
      array={favorites}
      goToNextPage={goToNextPage}
      currentPage={currentPage}
      totalResults={totalResults}
      empty={empty}
      history={history}
      operations={operationsFavoritesRequest}
      removeBox
    />
  );
};
Favorites.defaultProps = {
  currentPage: 0,
  totalResults: 0,
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  operationsFavoritesRequest: PropTypes.func.isRequired,
  totalResults: PropTypes.number,
  empty: PropTypes.bool.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
};

export default Favorites;
