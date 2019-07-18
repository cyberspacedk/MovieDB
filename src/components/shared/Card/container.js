import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import Card from './component';

class CardItemContainer extends Component {
  handleShowMoreDetails = () => {
    const { history, item } = this.props;
    history.push(`/${item.id}`);
  };

  onOk = () => {
    const { history, operations, item } = this.props;

    if (history.location.pathname.includes('lists')) {
      const listId = /[0-9]{2,}$/.exec(history.location.pathname)[0];
      operations(listId, item.id);
    } else {
      operations(item.id, false);
    }
  };

  handleRemoveWatchModal = e => {
    e.stopPropagation();
    Modal.confirm({
      title: 'Do you want to delete movie ?',
      onOk: this.onOk,
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
  item: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  operations: PropTypes.func.isRequired,
};

export default CardItemContainer;
