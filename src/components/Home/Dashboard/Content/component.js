import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';
import Spinner from '../../../shared/StatusFields/Spinner';
import Empty from '../../../shared/StatusFields/Empty';
import Error from '../../../shared/StatusFields/Error';
import Movies from './Movies';
import TrendingMovies from './TrendingMovies';
import SearchPanel from './SearchPanel';

const { Content } = Layout;

const PageContent = ({
  isLoading,
  isError,
  searchResponse,
  isEmpty,
  totalResults,
}) => {
  return (
    <Layout>
      <Content>
        <div className="top-margin">
          <Row type="flex" justify="center">
            <Col span={20}>
              <SearchPanel />
            </Col>
          </Row>
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
      </Content>
    </Layout>
  );
};

PageContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  searchResponse: PropTypes.arrayOf(PropTypes.object).isRequired,
  isEmpty: PropTypes.bool.isRequired,
  totalResults: PropTypes.number.isRequired,
};
export default PageContent;
