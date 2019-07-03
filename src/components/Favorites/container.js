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
  getFavoritesList,
  isError,
  isLoading,
  isEmpty,
  getTotalPages,
  getCurrentPage,
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
  getFavoritesRequest: PropTypes.func,
};

const mstp = state => ({
  loading: isLoading(state),
  error: isError(state),
  empty: isEmpty(state),
  favoritesList: getFavoritesList(state),
  totalResults: getTotalPages(state),
  currentPage: getCurrentPage(state),
});

const mdtp = {
  getFavoritesRequest,
  operationsFavoritesRequest,
};

export default connect(
  mstp,
  mdtp,
)(FavoritesContainer);
