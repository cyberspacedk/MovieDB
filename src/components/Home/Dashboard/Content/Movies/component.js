/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Row, Col, Pagination, BackTop } from 'antd';
import Card from '../../../../shared/Card';

// eslint-disable-next-line no-unused-vars
const Movies = ({ response, totalResults, history }) => (
  <Layout>
    <Layout.Content>
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
              />
            </Col>
          </Row>
        )}
      </div>
    </Layout.Content>
    <BackTop />
  </Layout>
);

export default Movies;
