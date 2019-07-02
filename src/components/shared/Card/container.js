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
    const { operations, item } = this.props;
    Modal.confirm({
      title: 'Do you want to delete movie from watchlist?',
      onOk() {
        operations(item.id, false);
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
