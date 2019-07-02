/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Icon, Modal } from 'antd';

const CardItem = ({ item, operations, showMoreDetails, history }) => {
  const removeMovieModal = e => {
    e.stopPropagation();
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

  return (
    <Col
      xs={{ span: 12 }}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      lg={{ span: 6 }}
      xl={{ span: 4 }}
      onClick={showMoreDetails}
    >
      <Card
        hoverable
        cover={
          item.poster_path ? (
            <img
              alt={item.title}
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            />
          ) : null
        }
        actions={
          operations
            ? [<Icon key="delete" type="delete" onClick={removeMovieModal} />]
            : null
        }
        className="top-margin card-film"
      >
        <Card.Meta
          title={item.title}
          description={`${item.overview.slice(0, 100)}...`}
        />
      </Card>
    </Col>
  );
};

CardItem.propTypes = {
  item: PropTypes.shape(PropTypes.string),
  operations: PropTypes.func,
  showMoreDetails: PropTypes.func,
  history: PropTypes.shape(PropTypes.object),
};

export default CardItem;
