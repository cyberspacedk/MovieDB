/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Favorites from './component';
import { getFavoritesRequest } from '../../store/favorites/actions';
import {
  getFavoritesList,
  isError,
  isLoading,
} from '../../store/favorites/selectors';

class FavoritesContainer extends Component {
  componentDidMount() {
    this.props.getFavoritesRequest();
  }

  render() {
    return <Favorites {...this.props} />;
  }
}

const mstp = state => ({
  favoritesList: getFavoritesList(state),
  isLoading: isLoading(state),
  isError: isError(state),
});

const mdtp = {
  getFavoritesRequest,
};

export default connect(
  mstp,
  mdtp,
)(FavoritesContainer);
