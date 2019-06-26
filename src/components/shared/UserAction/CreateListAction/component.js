import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Button, Icon } from 'antd';
import CreateListFormModal from './CreateListFormModal';

const PopoverContent = ({ showModal, hidePopover }) => (
  <>
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
    </div>

    {/* If list exist map this
    <div>
      <Button type="link">List name</Button>
    </div> */}
  </>
);

const CreateListAction = ({
  visiblePop,
  visibleMod,
  showPopover,
  hidePopover,
  showModal,
  hideModal,
}) => {
  return (
    <>
      <Popover
        content={
          <PopoverContent hidePopover={hidePopover} showModal={showModal} />
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

PopoverContent.propTypes = {
  showModal: PropTypes.func.isRequired,
  hidePopover: PropTypes.func.isRequired,
};

CreateListAction.propTypes = {
  visiblePop: PropTypes.bool.isRequired,
  visibleMod: PropTypes.bool.isRequired,
  showPopover: PropTypes.func.isRequired,
  hidePopover: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default CreateListAction;
