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
  getFavorites,
} from '../../store/favorites/selectors';

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
  favorites: getFavorites(state),
});

const mdtp = {
  getFavoritesRequest,
  operationsFavoritesRequest,
};

export default connect(
  mstp,
  mdtp,
)(FavoritesContainer);
