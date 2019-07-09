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
  getTotalResults,
  getQuery,
  getCurrentPage,
  getSearched,
} from '../../../../../store/search/selectors';
import { searchRequest } from '../../../../../store/search/actions';

class MoviesContainer extends Component {
  goToNextPage = page => {
    const { searchRequest, query } = this.props;
    searchRequest(query, page);
  };

  render() {
    return <Movies {...this.props} goToNextPage={this.goToNextPage} />;
  }
}

MoviesContainer.propTypes = {
  query: PropTypes.string.isRequired,
  searchRequest: PropTypes.func.isRequired,
};

const mstp = state => ({
  loading: isLoading(state),
  error: isError(state),
  empty: isEmpty(state),
  movies: getSearched(state),
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
