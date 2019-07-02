import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchDataRequest } from '../../../../../store/trendingMovies/actions';
import TopFilms from './component';
import {
  getTopFilmsSelector,
  isloading,
  isError,
  isEmpty,
} from '../../../../../store/trendingMovies/selectors';

export class TrendingMoviesContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchDataRequest();
  }

  render() {
    return <TopFilms {...this.props} />;
  }
}

TrendingMoviesContainer.propTypes = {
  fetchDataRequest: PropTypes.func,
};

export const mstp = state => ({
  topFilms: getTopFilmsSelector(state),
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
