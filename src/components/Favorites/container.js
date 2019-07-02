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
} from '../../store/favorites/selectors';

class FavoritesContainer extends Component {
  componentDidMount() {
    this.props.getFavoritesRequest();
  }

  render() {
    return <Favorites {...this.props} />;
  }
}

FavoritesContainer.propTypes = {
  getFavoritesRequest: PropTypes.func.isRequired,
};

const mstp = state => ({
  favoritesList: getFavoritesList(state),
  loading: isLoading(state),
  error: isError(state),
  empty: isEmpty(state),
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
