import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Icon, Modal } from 'antd';

const CardItem = ({ item, operations, showMoreDetails }) => {
  const removeWatchModal = e => {
    e.stopPropagation();
    Modal.confirm({
      title: 'Do you want to delete movie from watchlist?',
      onOk() {
        operations(item.id, false);
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
            ? [<Icon key="delete" type="delete" onClick={removeWatchModal} />]
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
  item: PropTypes.shape(PropTypes.string).isRequired,
  operations: PropTypes.func.isRequired,
  showMoreDetails: PropTypes.func.isRequired,
};

export default CardItem;
