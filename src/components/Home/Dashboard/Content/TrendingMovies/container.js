import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchDataRequest } from '../../../../../store/trendingMovies/actions';
import TopFilms from './component';
import {
  isloading,
  isError,
  isEmpty,
  getTrending,
} from '../../../../../store/trendingMovies/selectors';

export class TrendingMoviesContainer extends Component {
  componentDidMount() {
    const { fetchDataRequest } = this.props;
    fetchDataRequest();
  }

  render() {
    return <TopFilms {...this.props} />;
  }
}

TrendingMoviesContainer.propTypes = {
  fetchDataRequest: PropTypes.func.isRequired,
};

export const mstp = state => ({
  topFilms: getTrending(state),
  loading: isloading(state),
  error: isError(state),
  empty: isEmpty(state),
});

const mdtp = {
  fetchDataRequest,
};

export default compose(
  connect(
    mstp,
    mdtp,
  ),
  withRouter,
)(TrendingMoviesContainer);
