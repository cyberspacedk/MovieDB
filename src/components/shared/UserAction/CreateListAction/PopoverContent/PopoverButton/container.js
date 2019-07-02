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
  movieId: PropTypes.number,
  item: PropTypes.arrayOf(PropTypes.object),
  addMovieToList: PropTypes.func,
};
export default PopoverButtonContainer;
