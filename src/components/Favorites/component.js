/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Row, Col, Pagination, BackTop } from 'antd';
import Spinner from '../shared/StatusFields/Spinner';
import Error from '../shared/StatusFields/Error';
import Card from '../shared/Card';

const Favorites = ({ favoritesList, isLoading, isError, history }) => {
  return (
    <Layout>
      <Layout.Content>
        <div className="top-margin">
          <Row type="flex" gutter={16} justify="center">
            <Col span={20}>
              {isLoading && <Spinner />}
              {isError && <Error />}
              {favoritesList &&
                favoritesList.map(item => (
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
      </Layout.Content>
      <BackTop />
    </Layout>
  );
};

export default Favorites;
