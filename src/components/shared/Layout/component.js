/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Pagination, BackTop, Typography } from 'antd';
import Error from '../StatusFields/Error';
import Empty from '../StatusFields/Empty';
import Spinner from '../StatusFields/Spinner';
import CardItem from '../Card';

const { Content } = Layout;
const { Title } = Typography;

const PageLayout = ({
  title,
  error,
  loading,
  array,
  empty,
  operations,
  history,
  totalResults,
  goToNextPage,
}) => (
  <Layout>
    <Content>
      {title && (
        <Row>
          <Col offset={2} span={20}>
            <div className="top-margin">
              <Title>{title}</Title>
            </div>
          </Col>
        </Row>
      )}

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
                />
              ))
            )}
          </Col>
        </Row>

        {!loading && totalResults > 0 && (
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

PageLayout.propTypes = {
  title: PropTypes.string,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  array: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.shape(PropTypes.object),
  totalResults: PropTypes.number,
  empty: PropTypes.bool,
  goToNextPage: PropTypes.func,
  operations: PropTypes.func,
};

export default PageLayout;
