import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../../../shared/Layout';

const TrendingMovies = ({ loading, error, topFilms, history, empty }) => (
  <PageLayout
    loading={loading}
    error={error}
    array={topFilms}
    history={history}
    empty={empty}
    totalResults={0}
  />
);

TrendingMovies.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  empty: PropTypes.bool,
  topFilms: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.shape(PropTypes.object),
};

export default TrendingMovies;
