import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import PopoverButton from './PopoverButton';

const PopoverContent = ({ showDialog, myLists, movieId, addMovieToList }) => (
  <div>
    <Button type="link" onClick={showDialog}>
      Create new list ...
    </Button>
    {myLists &&
      myLists.map(item => (
        <div key={item.id}>
          <PopoverButton
            item={item}
            movieId={movieId}
            addMovieToList={addMovieToList}
          />
        </div>
      ))}
  </div>
);

PopoverContent.propTypes = {
  showDialog: PropTypes.func.isRequired,
  myLists: PropTypes.arrayOf(PropTypes.object).isRequired,
  movieId: PropTypes.number.isRequired,
  addMovieToList: PropTypes.func.isRequired,
};

export default PopoverContent;
