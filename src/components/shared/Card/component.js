import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'antd';

const CardItem = ({ id, poster, title, overview, history, actions }) => {
  return (
    <Col
      xs={{ span: 12 }}
      sm={{ span: 12 }}
      md={{ span: 8 }}
      lg={{ span: 6 }}
      xl={{ span: 4 }}
      onClick={() => {
        history.push(`/${id}`);
      }}
    >
      <Card
        hoverable
        cover={
          <img alt={title} src={`https://image.tmdb.org/t/p/w200${poster}`} />
        }
        actions={actions}
        className="top-margin card-film"
      >
        <Card.Meta title={title} description={`${overview.slice(0, 100)}...`} />
      </Card>
    </Col>
  );
};

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  history: PropTypes.shape(PropTypes.object).isRequired,
  actions: PropTypes.node.isRequired,
};

export default CardItem;
