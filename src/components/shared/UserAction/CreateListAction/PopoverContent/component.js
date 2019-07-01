import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const PopoverContent = ({ showModal, hidePopover, myLists }) => (
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
          <Button type="link">{item.name}</Button>
        </div>
      ))}
  </div>
);

PopoverContent.propTypes = {
  showModal: PropTypes.func.isRequired,
  hidePopover: PropTypes.func.isRequired,
  myLists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PopoverContent;
