import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './component';

const ListItemContainer = ({ history, item, deleteListRequest }) => {
  const handleListDetails = () => {
    history.push(`/lists/${item.id}`);
  };
  return (
    <ListItem
      item={item}
      handleListDetails={handleListDetails}
      deleteListRequest={deleteListRequest}
    />
  );
};

ListItemContainer.propTypes = {
  history: PropTypes.shape(PropTypes.object).isRequired,
  item: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteListRequest: PropTypes.func.isRequired,
};

export default ListItemContainer;
