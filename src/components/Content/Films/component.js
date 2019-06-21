/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card, Pagination, BackTop } from 'antd';

// eslint-disable-next-line no-unused-vars
const Films = ({ response, totalResults, aboutFilm }) => (
  <Layout>
    <Layout.Content>
      <div className="top-margin">
        <Row type="flex" gutter={16} justify="center">
          <Col span={20}>
            {response.map(item => (
              <Col
                key={item.id}
                xs={{ span: 12 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
                xl={{ span: 4 }}
              >
                <Card
                  hoverable
                  cover={
                    <img
                      alt={item.title}
                      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    />
                  }
                  className="top-margin card-film"
                  /*  actions={} */
                >
                  <Card.Meta
                    title={item.original_title}
                    description={`${item.overview.slice(0, 100)}...`}
                  />
                  <Link to={`/${item.id}`} onClick={() => aboutFilm(item.id)}>
                    More details ...
                  </Link>
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

export default Films;
