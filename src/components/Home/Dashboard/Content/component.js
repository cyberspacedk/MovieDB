/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import Spinner from '../../../shared/StatusFields/Spinner';
import Empty from '../../../shared/StatusFields/Empty';
import Error from '../../../shared/StatusFields/Error';
import Movies from './Movies';
import TrendingMovies from './TrendingMovies';

const Content = props => {
  const { isLoading, isError, searchResponse, isEmpty, totalResults } = props;
  return (
    <Layout>
      <Layout.Content>
        <div className="top-margin">
          <Row type="flex" justify="center">
            <Col>
              {isLoading && <Spinner />}
              {isEmpty && <Empty />}
              {isError && <Error />}
              {searchResponse ? (
                <Movies response={searchResponse} totalResults={totalResults} />
              ) : (
                <TrendingMovies />
              )}
            </Col>
          </Row>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Content;
