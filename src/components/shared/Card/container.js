import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import Card from './component';

class CardItemContainer extends React.Component {
  removeMovieModal = e => {
    e.stopPropagation();

    const { history, item, operations } = this.props;

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

  showMoreDetails = () => {
    this.props.history.push(`/${this.props.item.id}`);
  };

  render() {
    return (
      <Card
        showMoreDetails={this.showMoreDetails}
        removeMovieModal={this.removeMovieModal}
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
