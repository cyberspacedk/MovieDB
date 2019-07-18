import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import ListItem from './component';

class ListItemContainer extends Component {
  handleListDetails = () => {
    const { history, item } = this.props;
    history.push(`/lists/${item.id}`);
  };

  onOk = () => {
    const {
      deleteListRequest,
      item: { id },
    } = this.props;
    deleteListRequest(id);
  };

  handleDeleteModal = e => {
    e.stopPropagation();
    Modal.confirm({
      title: 'Do you want to delete this list?',
      onOk: this.onOk,
    });
  };

  render() {
    const { item } = this.props;
    return (
      <ListItem
        item={item}
        handleListDetails={this.handleListDetails}
        handleDeleteModal={this.handleDeleteModal}
      />
    );
  }
}

ListItemContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  deleteListRequest: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default ListItemContainer;
