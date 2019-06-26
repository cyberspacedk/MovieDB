import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Pagination, BackTop } from 'antd';
import Card from '../../../../shared/Card';

const { Content } = Layout;

const Movies = ({ response, totalResults, history, query, searchRequest }) => (
  <Layout>
    <Content>
      <div className="top-margin">
        <Row type="flex" gutter={16} justify="center">
          <Col span={20}>
            {response &&
              response.map(item => (
                <Card
                  key={item.id}
                  id={item.id}
                  poster={item.poster_path}
                  title={item.original_title}
                  overview={item.overview}
                  history={history}
                />
              ))}
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
                onChange={page => searchRequest(query, page)}
              />
            </Col>
          </Row>
        )}
      </div>
    </Content>
    <BackTop />
  </Layout>
);

Movies.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalResults: PropTypes.number.isRequired,
  history: PropTypes.shape(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  searchRequest: PropTypes.func.isRequired,
};

export default Movies;
