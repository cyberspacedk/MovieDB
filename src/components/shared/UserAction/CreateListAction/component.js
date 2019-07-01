import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Icon } from 'antd';
import CreateListFormModal from './CreateListFormModal';
import PopoverContent from './PopoverContent';

const CreateListAction = ({
  visiblePop,
  visibleMod,
  showPopover,
  showDialog,
  hideModal,
  myLists,
  movieId,
  addMovieToList,
}) => {
  return (
    <>
      <Popover
        content={
          <PopoverContent
            showDialog={showDialog}
            myLists={myLists}
            addMovieToList={addMovieToList}
            movieId={movieId}
          />
        }
        title="Add movie to list"
        visible={visiblePop}
        trigger="click"
        onVisibleChange={showPopover}
      >
        <Icon type="plus-circle" />
      </Popover>
      <CreateListFormModal visibleMod={visibleMod} hideModal={hideModal} />
    </>
  );
};

CreateListAction.propTypes = {
  visiblePop: PropTypes.bool.isRequired,
  visibleMod: PropTypes.bool.isRequired,
  showPopover: PropTypes.func.isRequired,
  showDialog: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  myLists: PropTypes.arrayOf(PropTypes.object).isRequired,
  movieId: PropTypes.number.isRequired,
  addMovieToList: PropTypes.func.isRequired,
};

export default CreateListAction;
