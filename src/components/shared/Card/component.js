/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, Icon } from 'antd';

const CardItem = ({
  item,
  handleShowMoreDetails,
  handleRemoveWatchModal,
  removeBox,
}) => {
  return (
    <Col
      xs={{ span: 12 }}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      lg={{ span: 6 }}
      xl={{ span: 4 }}
      onClick={handleShowMoreDetails}
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
          removeBox
            ? [
                <Icon
                  key="delete"
                  type="delete"
                  onClick={handleRemoveWatchModal}
                />,
              ]
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
CardItem.defaultProps = {
  removeBox: false,
};

CardItem.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
  handleShowMoreDetails: PropTypes.func.isRequired,
  handleRemoveWatchModal: PropTypes.func.isRequired,
  removeBox: PropTypes.bool,
};

export default CardItem;
