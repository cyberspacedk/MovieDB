/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Pagination, BackTop, Card, Icon } from 'antd';
// eslint-disable-next-line no-unused-vars
import Error from '../StatusFields/Error';
import Empty from '../StatusFields/Empty';
import Spinner from '../StatusFields/Spinner';

const { Content } = Layout;
const { Meta } = Card;

const PageLayout = ({
  loading,
  error,
  empty,
  array,
  totalResults,
  history,
  goToNextPage,
  operations,
}) => (
  <Layout>
    <Content>
      <div className="top-margin">
        <Row type="flex" gutter={16} justify="center">
          <Col span={20}>
            {loading ? (
              <Spinner />
            ) : (
              array &&
              array.map(item => (
                <Col
                  key={item.id}
                  xs={{ span: 12 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 6 }}
                  xl={{ span: 4 }}
                  onClick={() => {
                    history.push(`/${item.id}`);
                  }}
                >
                  {!operations ? (
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={item.title}
                          src={`https://image.tmdb.org/t/p/w200${
                            item.poster_path
                          }`}
                        />
                      }
                      className="top-margin card-film"
                    >
                      <Meta
                        title={item.title}
                        description={`${item.overview.slice(0, 100)}...`}
                      />
                    </Card>
                  ) : (
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={item.title}
                          src={`https://image.tmdb.org/t/p/w200${
                            item.poster_path
                          }`}
                        />
                      }
                      actions={[
                        <Icon
                          key="delete"
                          type="delete"
                          onClick={e => operations(e, item.id)}
                        />,
                      ]}
                      className="top-margin card-film"
                    >
                      <Meta
                        title={item.title}
                        description={`${item.overview.slice(0, 100)}...`}
                      />
                    </Card>
                  )}
                </Col>
              ))
            )}
          </Col>
        </Row>

        {totalResults && (
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
      </div>
    </Content>
    {error && <Error />}
    {empty && <Empty />}
    <BackTop />
  </Layout>
);

PageLayout.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalResults: PropTypes.number.isRequired,
  history: PropTypes.shape(PropTypes.object).isRequired,
  goToNextPage: PropTypes.func.isRequired,
  operations: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  empty: PropTypes.bool.isRequired,
};

export default PageLayout;
