import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import PageLayout from '../shared/Layout';

const Favorites = ({
  favoritesList,
  loading,
  error,
  empty,
  history,
  operationsFavoritesRequest,
  totalPage,
}) => {
  const removeFavModal = (e, id) => {
    e.stopPropagation();
    Modal.confirm({
      title: 'Do you want to delete movie from favorites?',
      onOk() {
        operationsFavoritesRequest(id, false);
      },
      onCancel() {},
    });
  };

  return (
    <PageLayout
      loading={loading}
      empty={empty}
      error={error}
      array={favoritesList}
      totalResults={totalPage}
      history={history}
      operations={removeFavModal}
    />
  );
};

Favorites.propTypes = {
  favoritesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  history: PropTypes.isRequired,
  operationsFavoritesRequest: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
  empty: PropTypes.bool.isRequired,
};

export default Favorites;
