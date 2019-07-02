/* eslint-disable react/require-default-props */
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
  movies: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  goToNextPage: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  empty: PropTypes.bool,
  currentPage: PropTypes.number,
};

export default Movies;
