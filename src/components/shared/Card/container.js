import React from 'react';
import PropTypes from 'prop-types';
import Card from './component';

const CardItemContainer = props => {
  const showMoreDetails = () => {
    props.history.push(`/${props.item.id}`);
  };

  return <Card showMoreDetails={showMoreDetails} {...props} />;
};

CardItemContainer.propTypes = {
  item: PropTypes.shape(PropTypes.string),
  history: PropTypes.shape(PropTypes.object),
  operations: PropTypes.func,
};

export default CardItemContainer;
