/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteAction from './component';
import { operationsFavoritesRequest } from '../../../../store/favorites/actions';

class FavoriteActionContainer extends Component {
  state = {
    favoriteStatus: false,
  };

  handleFavorite = () => {
    this.setState(prevState => ({ favoriteStatus: !prevState.favoriteStatus }));
    this.props.operationsFavoritesRequest(this.props.movieId, true);
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

const mdtp = {
  operationsFavoritesRequest,
};

export default connect(
  null,
  mdtp,
)(FavoriteActionContainer);
