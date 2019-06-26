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
  getCurrentPage,
  getTotalPages,
} from '../../store/favorites/selectors';

class FavoritesContainer extends Component {
  componentDidMount() {
    this.props.getFavoritesRequest();
  }

  render() {
    return (
      <Favorites
        {...this.props}
        removeFav={this.props.operationsFavoritesRequest}
      />
    );
  }
}

FavoritesContainer.propTypes = {
  getFavoritesRequest: PropTypes.func.isRequired,
  operationsFavoritesRequest: PropTypes.isRequired,
};

const mstp = state => ({
  favoritesList: getFavoritesList(state),
  isLoading: isLoading(state),
  isError: isError(state),
  currentPage: getCurrentPage(state),
  totalPage: getTotalPages(state),
});

const mdtp = {
  getFavoritesRequest,
  operationsFavoritesRequest,
};

export default connect(
  mstp,
  mdtp,
)(FavoritesContainer);
