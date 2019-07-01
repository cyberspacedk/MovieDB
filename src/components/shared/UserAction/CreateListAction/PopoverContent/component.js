import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const PopoverContent = ({
  showModal,
  hidePopover,
  myLists,
  movieId,
  addMovieToList,
}) => (
  <div>
    <Button
      type="link"
      onClick={() => {
        hidePopover();
        showModal();
      }}
    >
      Create new list ...
    </Button>
    {myLists &&
      myLists.map(item => (
        <div key={item.id}>
          <Button type="link" onClick={() => addMovieToList(item.id, movieId)}>
            {item.name}
          </Button>
        </div>
      ))}
  </div>
);

PopoverContent.propTypes = {
  showModal: PropTypes.func.isRequired,
  hidePopover: PropTypes.func.isRequired,
  myLists: PropTypes.arrayOf(PropTypes.object).isRequired,
  movieId: PropTypes.number.isRequired,
  addMovieToList: PropTypes.func.isRequired,
};

export default PopoverContent;
