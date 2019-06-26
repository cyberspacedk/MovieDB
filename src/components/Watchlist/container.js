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
  getCurrentPage,
  getTotalPages,
} from '../../store/watchList/selectors';

class WatchListContainer extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getWatchListRequest();
  }

  render() {
    return <WatchList {...this.props} />;
  }
}

WatchListContainer.propTypes = {
  operationsWatchListRequest: PropTypes.func.isRequired,
  getWatchListRequest: PropTypes.func.isRequired,
};

const mstp = state => ({
  watchList: getWatchList(state),
  loading: isLoading(state),
  error: isError(state),
  currentPage: getCurrentPage(state),
  totalPage: getTotalPages(state),
});

const mdtp = {
  getWatchListRequest,
  operationsWatchListRequest,
};

export default connect(
  mstp,
  mdtp,
)(WatchListContainer);
