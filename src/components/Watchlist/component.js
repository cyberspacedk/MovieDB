import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Pagination, BackTop, Icon, Modal } from 'antd';
import Spinner from '../shared/StatusFields/Spinner';
import Error from '../shared/StatusFields/Error';
import Empty from '../shared/StatusFields/Empty';
import Card from '../shared/Card';

const { Content } = Layout;

const WatchList = ({
  watchList,
  loading,
  error,
  history,
  totalPage,
  operationsWatchListRequest,
}) => {
  const removeWatchModal = (e, id) => {
    e.stopPropagation();
    Modal.confirm({
      title: 'Do you want to delete movie from watchlist?',
      onOk() {
        operationsWatchListRequest(id, false);
      },
      onCancel() {},
    });
  };

  return (
    <Layout>
      <Content>
        <div className="top-margin">
          <Row type="flex" gutter={16} justify="center">
            <Col span={20}>
              {loading && <Spinner />}
              {error && <Error />}
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
      </Content>
      <BackTop />
    </Layout>
  );
};
WatchList.propTypes = {
  watchList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  history: PropTypes.isRequired,
  operationsWatchListRequest: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
};

export default WatchList;
