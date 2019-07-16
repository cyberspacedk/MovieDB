import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FavoriteAction from './component';
import { operationsFavoritesRequest } from '../../../../store/favorites/actions';

class FavoriteActionContainer extends Component {
  state = {
    favoriteStatus: false,
  };

  handleFavorite = () => {
    const { operationsFavoritesRequest, movieId } = this.props;
    this.setState(prevState => ({ favoriteStatus: !prevState.favoriteStatus }));
    operationsFavoritesRequest(movieId, true);
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

FavoriteActionContainer.propTypes = {
  operationsFavoritesRequest: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
};

const mdtp = {
  operationsFavoritesRequest,
};

export default connect(
  null,
  mdtp,
)(FavoriteActionContainer);
