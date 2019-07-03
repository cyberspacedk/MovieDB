/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WatchList from './component';
import {
  getWatchListRequest,
  operationsWatchListRequest,
} from '../../store/watchList/actions';
import {
  getWatchList,
  isError,
  isLoading,
  isEmpty,
  getTotalPages,
  getCurrentPage,
} from '../../store/watchList/selectors';

class WatchListContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getWatchListRequest();
  }

  goToNextPage = page => {
    this.props.getWatchListRequest(page);
  };

  render() {
    return <WatchList {...this.props} goToNextPage={this.goToNextPage} />;
  }
}

WatchListContainer.propTypes = {
  operationsWatchListRequest: PropTypes.func,
  getWatchListRequest: PropTypes.func,
};

const mstp = state => ({
  error: isError(state),
  loading: isLoading(state),
  empty: isEmpty(state),
  watchList: getWatchList(state),
  totalResults: getTotalPages(state),
  currentPage: getCurrentPage(state),
});

const mdtp = {
  getWatchListRequest,
  operationsWatchListRequest,
};

export default connect(
  mstp,
  mdtp,
)(WatchListContainer);
