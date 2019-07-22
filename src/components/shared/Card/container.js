import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import Card from './component';
import { deleteContent } from '../../../helpers';

class CardItemContainer extends Component {
  handleShowMoreDetails = () => {
    const { history, item } = this.props;
    history.push(`/${item.id}`);
  };

  onOk = () => {
    const { history, operations, item } = this.props;
    deleteContent(history, item, operations);
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
