/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Card, BackTop } from 'antd';
import Spinner from '../../../../shared/StatusFields/Spinner';

const TrendingMovies = ({ loading, topFilms, singleFilmRequest, history }) => (
  <Layout>
    <Layout.Content>
      <div className="top-margin">
        <Row type="flex" gutter={16} justify="center" align="left">
          <Col span={20}>
            {loading ? (
              <Spinner />
            ) : (
              topFilms.map(item => (
                <Col
                  key={item.id}
                  xs={{ span: 12 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 6 }}
                  xl={{ span: 4 }}
                  onClick={() => {
                    singleFilmRequest(item.id);
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
                    /*  actions={} */
                  >
                    <Card.Meta
                      title={item.original_title}
                      description={`${item.overview.slice(0, 100)}...`}
                    />
                  </Card>
                </Col>
              ))
            )}
          </Col>
        </Row>
      </div>
    </Layout.Content>
    <BackTop />
  </Layout>
);

TrendingMovies.propTypes = {
  loading: PropTypes.bool.isRequired,
  topFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TrendingMovies;
