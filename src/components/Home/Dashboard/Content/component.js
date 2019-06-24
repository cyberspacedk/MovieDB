/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import Spinner from '../../../shared/StatusFields/Spinner';
import Empty from '../../../shared/StatusFields/Empty';
import ErrorRequest from '../../../shared/StatusFields/Error';
import Films from './Films';
import TrendingMovies from './TrendingMovies';

const Content = props => {
  const {
    isLoading,
    isError,
    searchResponse,
    emptyResponse,
    totalResults,
  } = props;
  return (
    <Layout>
      <Layout.Content>
        <div className="top-margin">
          <Row type="flex" justify="center">
            <Col>
              {searchResponse ? (
                <Films response={searchResponse} totalResults={totalResults} />
              ) : (
                <TrendingMovies />
              )}
              {isLoading && <Spinner />}
              {emptyResponse && <Empty />}
              {isError && <ErrorRequest />}
            </Col>
          </Row>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Content;
