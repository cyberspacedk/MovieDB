/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteAction from './component';
import { addToFavoritesRequest } from '../../../../store/favorites/actions';

const mdtp = {
  addToFavoritesRequest,
};

class FavoriteActionContainer extends Component {
  state = {
    favoriteStatus: false,
  };

  handleFavorite = () => {
    this.setState(prevState => ({ favoriteStatus: !prevState.favoriteStatus }));
    this.props.addToFavoritesRequest(this.props.movieId);
  };

  render() {
    const { favoriteStatus } = this.state;
    return (
      <FavoriteAction
        handleFavorite={this.handleFavorite}
        favoriteStatus={favoriteStatus}
      />
    );
  }
}
export default connect(
  null,
  mdtp,
)(FavoriteActionContainer);
