/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
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
} from '../../store/favorites/selectors';

class FavoritesContainer extends Component {
  componentDidMount() {
    this.props.getFavoritesRequest();
  }
  /*
  componentDidUpdate() {
    this.props.getFavoritesRequest();
  } */

  /*  shouldComponentUpdate(nextProps) {
    console.log('THIS PROPS', this.props);
    console.log('NEXT PROPS', nextProps);
    if (this.props.favoritesList.length === nextProps.favoritesList.length)
      return false;
    return true;
  }
 */
  render() {
    return (
      <Favorites
        {...this.props}
        removeFav={this.props.operationsFavoritesRequest}
      />
    );
  }
}

const mstp = state => ({
  favoritesList: getFavoritesList(state),
  isLoading: isLoading(state),
  isError: isError(state),
});

const mdtp = {
  getFavoritesRequest,
  operationsFavoritesRequest,
};

export default connect(
  mstp,
  mdtp,
)(FavoritesContainer);
