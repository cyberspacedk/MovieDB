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
TrendingMovies.defaultProps = {
  history: {
    push: () => {},
  },
};
TrendingMovies.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  empty: PropTypes.bool.isRequired,
  topFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default TrendingMovies;
