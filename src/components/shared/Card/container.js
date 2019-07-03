import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import Card from './component';

class CardItemContainer extends Component {
  handleShowMoreDetails = () => {
    const { history, item } = this.props;
    history.push(`/${item.id}`);
  };

  handleRemoveWatchModal = e => {
    e.stopPropagation();
    const { history, operations, item } = this.props;
    Modal.confirm({
      title: 'Do you want to delete movie ?',
      onOk() {
        if (history.location.pathname.includes('lists')) {
          const listId = /[0-9]{2,}$/.exec(history.location.pathname)[0];
          operations(listId, item.id);
        } else {
          operations(item.id, false);
        }

      },
      onCancel() {},
    });
  };

  render() {
    return (
      <Card
        handleShowMoreDetails={this.handleShowMoreDetails}
        handleRemoveWatchModal={this.handleRemoveWatchModal}
        {...this.props}
      />
    );
  }
}

CardItemContainer.propTypes = {
  item: PropTypes.shape(PropTypes.string),
  history: PropTypes.shape(PropTypes.object),
  operations: PropTypes.func,
};

export default CardItemContainer;
