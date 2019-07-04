/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Favorites from './component';
import {
  getFavoritesRequest,
  operationsFavoritesRequest,
} from '../../store/favorites/actions';
import {
  isError,
  isLoading,
  isEmpty,
  getTotalPages,
  getCurrentPage,
} from '../../store/favorites/selectors';
import getFieldMovies from '../../store/database/selectors';

class FavoritesContainer extends Component {
  componentDidMount() {
    this.props.getFavoritesRequest();
  }

  goToNextPage = page => {
    this.props.getFavoritesRequest(page);
  };

  render() {
    return <Favorites {...this.props} goToNextPage={this.goToNextPage} />;
  }
}

FavoritesContainer.propTypes = {
  getFavoritesRequest: PropTypes.func.isRequired,
};

const mstp = state => ({
  loading: isLoading(state),
  error: isError(state),
  empty: isEmpty(state),
  totalResults: getTotalPages(state),
  currentPage: getCurrentPage(state),
  favorites: getFieldMovies(state, 'favorites'),
});

const mdtp = {
  getFavoritesRequest,
  operationsFavoritesRequest,
};

export default connect(
  mstp,
  mdtp,
)(FavoritesContainer);
