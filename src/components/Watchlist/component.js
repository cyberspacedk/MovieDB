/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Row, Col, Pagination, BackTop, Icon, Modal } from 'antd';
import Spinner from '../shared/StatusFields/Spinner';
import Error from '../shared/StatusFields/Error';
import Empty from '../shared/StatusFields/Empty';
import Card from '../shared/Card';

const WatchList = ({
  watchList,
  isLoading,
  isError,
  history,
  removeWatch,
  currentPage,
  totalPage,
}) => {
  const removeWatchModal = (e, id) => {
    e.stopPropagation();
    Modal.confirm({
      title: 'Do you want to delete movie from watchlist?',
      onOk() {
        removeWatch(id, false);
        // WATCH REDIRECT
        history.push('/');
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
              {!watchList.length && <Empty />}
              {watchList &&
                watchList.map(item => (
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
                        onClick={e => removeWatchModal(e, item.id)}
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

export default WatchList;
