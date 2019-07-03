import React, { Component } from 'react';
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

class MoviesContainer extends Component {
  goToNextPage = page => {
    // eslint-disable-next-line no-shadow
    const { searchRequest, query } = this.props;
    searchRequest(query, page);
  };

  render() {
    return <Movies {...this.props} goToNextPage={this.goToNextPage} />;
  }
}

MoviesContainer.propTypes = {
  query: PropTypes.string,
  searchRequest: PropTypes.func,
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
