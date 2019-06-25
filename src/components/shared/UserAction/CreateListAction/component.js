/* eslint-disable react/prop-types */
import { Popover, Button, Icon, Modal } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
PopoverContent.propTypes = {
  showModal: PropTypes.func.isRequired,
  hidePopover: PropTypes.func.isRequired,
};

const CreateListAction = ({ createListRequest }) => {
  const [visiblePop, setVisiblePop] = useState(false);
  const showPopover = visible => setVisiblePop(visible);
  const hidePopover = () => setVisiblePop(false);

  const [visibleMod, setVisibleMod] = useState(false);
  const showModal = () => setVisibleMod(true);
  const hideModal = () => setVisibleMod(false);

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
      <Modal
        title="Create list"
        okText="Create"
        visible={visibleMod}
        onCancel={hideModal}
        onOk={() => createListRequest()}
      >
        Some future content
      </Modal>
    </>
  );
};

export default CreateListAction;
