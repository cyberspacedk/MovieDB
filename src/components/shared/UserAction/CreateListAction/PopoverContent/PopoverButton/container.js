import React from 'react';
import PropTypes from 'prop-types';
import PopoverButton from './component';

const PopoverButtonContainer = ({ movieId, addMovieToList, item }) => {
  const handlerAddMovieToList = () => {
    addMovieToList(item.id, movieId);
    console.log(item.id, movieId);
  };
  return (
    <PopoverButton item={item} handlerAddMovieToList={handlerAddMovieToList} />
  );
};

PopoverButtonContainer.propTypes = {
  movieId: PropTypes.number,
  item: PropTypes.arrayOf(PropTypes.object),
  addMovieToList: PropTypes.func,
};
export default PopoverButtonContainer;
