import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../../../shared/Layout';

const Movies = ({
  loading,
  error,
  empty,
  movies,
  totalResults,
  history,
  goToNextPage,
  currentPage,
}) => (
  <PageLayout
    loading={loading}
    empty={empty}
    error={error}
    array={movies}
    totalResults={totalResults}
    currentPage={currentPage}
    history={history}
    goToNextPage={goToNextPage}
  />
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalResults: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  goToNextPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  empty: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Movies;
