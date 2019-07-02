/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Icon } from 'antd';

const CardItem = ({ item, operations, showMoreDetails, removeMovieModal }) => {
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
  removeMovieModal: PropTypes.func,
};

export default CardItem;
