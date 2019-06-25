/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Row, Col, Card, Pagination, BackTop } from 'antd';

// eslint-disable-next-line no-unused-vars
const Movies = ({ response, totalResults, history }) => (
  <Layout>
    <Layout.Content>
      <div className="top-margin">
        <Row type="flex" gutter={16} justify="center">
          <Col span={20}>
            {response &&
              response.map(item => (
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
                    <Card.Meta
                      title={item.original_title}
                      description={`${item.overview.slice(0, 100)}...`}
                    />
                  </Card>
                </Col>
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
