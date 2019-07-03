import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Movies from './component';
import {
  isError,
  isLoading,
  isEmpty,
  getSearchResponse,
  getTotalResults,
  getQuery,
  getCurrentPage,
} from '../../../../../store/search/selectors';
import { searchRequest } from '../../../../../store/search/actions';

const MoviesContainer = props => {
  const goToNextPage = page => {
    props.searchRequest(props.query, page);
  };
  return <Movies {...props} goToNextPage={goToNextPage} />;
};

MoviesContainer.propTypes = {
  query: PropTypes.string.isRequired,
  searchRequest: PropTypes.func.isRequired,
};

const mstp = state => ({
  loading: isLoading(state),
  error: isError(state),
  empty: isEmpty(state),
  movies: getSearchResponse(state),
  query: getQuery(state),
  totalResults: getTotalResults(state),
  currentPage: getCurrentPage(state),
});

const mdtp = {
  searchRequest,
};

export default compose(
  connect(
    mstp,
    mdtp,
  ),
  withRouter,
)(MoviesContainer);
