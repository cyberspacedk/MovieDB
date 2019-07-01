import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Icon } from 'antd';
import CreateListFormModal from './CreateListFormModal';
import PopoverContent from './PopoverContent';

const CreateListAction = ({
  visiblePop,
  visibleMod,
  showPopover,
  hidePopover,
  showModal,
  hideModal,
  myLists,
}) => {
  return (
    <>
      <Popover
        content={
          <PopoverContent
            hidePopover={hidePopover}
            showModal={showModal}
            myLists={myLists}
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
  hidePopover: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  myLists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CreateListAction;
