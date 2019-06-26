import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, BackTop } from 'antd';
import Spinner from '../../../../shared/StatusFields/Spinner';
import Error from '../../../../shared/StatusFields/Error';
import Card from '../../../../shared/Card';

const { Content } = Layout;

const TrendingMovies = ({ loading, error, topFilms, history }) => (
  <Layout>
    <Content>
      <div className="top-margin">
        <Row type="flex" gutter={16} justify="center">
          <Col span={20}>
            {loading && <Spinner />}
            {error && <Error />}
            {topFilms &&
              topFilms.map(item => (
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
      </div>
    </Content>
    <BackTop />
  </Layout>
);

TrendingMovies.propTypes = {
  loading: PropTypes.bool.isRequired,
  topFilms: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.bool.isRequired,
  history: PropTypes.shape(PropTypes.object).isRequired,
};

export default TrendingMovies;
