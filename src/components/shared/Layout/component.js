/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Pagination, BackTop } from 'antd';
import Error from '../StatusFields/Error';
import Empty from '../StatusFields/Empty';
import Spinner from '../StatusFields/Spinner';
import CardItem from '../Card';

const { Content } = Layout;

const PageLayout = ({
  loading,
  error,
  empty,
  array,
  totalResults,
  history,
  goToNextPage,
  operations,
  removeBox,
}) => (
  <Layout>
    <Content>
      <div className="top-margin">
        <Row type="flex" gutter={16} justify="center">
          <Col span={20}>
            {error && <Error />}
            {loading ? (
              <Spinner />
            ) : (
              array &&
              array.map(item => (
                <CardItem
                  key={item.id}
                  item={item}
                  operations={operations}
                  history={history}
                  removeBox={removeBox}
                />
              ))
            )}
          </Col>
        </Row>

        {!loading && totalResults !== 0 && (
          <Row type="flex" justify="center">
            <Col>
              <Pagination
                defaultCurrent={1}
                total={totalResults}
                className="pagination"
                defaultPageSize={20}
                onChange={goToNextPage}
              />
            </Col>
          </Row>
        )}
        {!loading && empty && <Empty />}
      </div>
    </Content>
    <BackTop />
  </Layout>
);
PageLayout.defaultProps = {
  removeBox: false,
};

PageLayout.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalResults: PropTypes.number.isRequired,
  history: PropTypes.shape(PropTypes.object).isRequired,
  goToNextPage: PropTypes.func.isRequired,
  operations: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  empty: PropTypes.bool.isRequired,
  removeBox: PropTypes.bool,
};

export default PageLayout;
