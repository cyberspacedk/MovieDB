import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopoverButton from './component';

class PopoverButtonContainer extends Component {
  handlerAddMovieToList = () => {
    const { item, movieId, addMovieToList } = this.props;
    addMovieToList(item.id, movieId);
  };

  render() {
    const { item } = this.props;
    return (
      <PopoverButton
        item={item}
        handlerAddMovieToList={this.handlerAddMovieToList}
      />
    );
  }
}

PopoverButtonContainer.propTypes = {
  movieId: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  addMovieToList: PropTypes.func.isRequired,
};
export default PopoverButtonContainer;
