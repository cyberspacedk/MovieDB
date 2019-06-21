/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import Spinner from './Spinner';
import Empty from './Empty';
import ErrorRequest from './Error';
import Films from './Films';
import TopFilms from './TopFilms';

const Content = props => {
  const {
    isLoading,
    isError,
    searchResponse,
    emptyResponse,
    totalResults,
    singleFilmRequest,
  } = props;
  return (
    <Layout>
      <Layout.Content>
        <div className="top-margin">
          <Row type="flex" justify="center">
            <Col>
              {searchResponse ? (
                <Films
                  response={searchResponse}
                  totalResults={totalResults}
                  aboutFilm={singleFilmRequest}
                />
              ) : (
                <TopFilms />
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
