/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Row, Col, Pagination, BackTop, Icon, Modal } from 'antd';
import Spinner from '../shared/StatusFields/Spinner';
import Error from '../shared/StatusFields/Error';
import Empty from '../shared/StatusFields/Empty';
import Card from '../shared/Card';

const Favorites = ({
  favoritesList,
  isLoading,
  isError,
  history,
  removeFav,
  currentPage,
  totalPage,
}) => {
  const removeFavModal = (e, id) => {
    e.stopPropagation();
    Modal.confirm({
      title: 'Do you want to delete movie from favorites?',
      onOk() {
        removeFav(id, false);
      },
      onCancel() {},
    });
  };

  return (
    <Layout>
      <Layout.Content>
        <div className="top-margin">
          <Row type="flex" gutter={16} justify="center">
            <Col span={20}>
              {isLoading && <Spinner />}
              {isError && <Error />}
              {!favoritesList.length && <Empty />}
              {favoritesList &&
                favoritesList.map(item => (
                  <Card
                    key={item.id}
                    id={item.id}
                    poster={item.poster_path}
                    title={item.original_title}
                    overview={item.overview}
                    history={history}
                    actions={[
                      <Icon
                        key="delete"
                        type="delete"
                        onClick={e => removeFavModal(e, item.id)}
                      />,
                    ]}
                  />
                ))}
            </Col>
          </Row>

          {totalPage ? (
            <Row type="flex" justify="center">
              <Col>
                <Pagination
                  defaultCurrent={1}
                  total={totalPage}
                  className="pagination"
                  defaultPageSize={20}
                />
              </Col>
            </Row>
          ) : null}
        </div>
      </Layout.Content>
      <BackTop />
    </Layout>
  );
};

export default Favorites;
