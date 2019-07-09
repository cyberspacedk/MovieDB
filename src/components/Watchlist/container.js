import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WatchList from './component';
import {
  getWatchListRequest,
  operationsWatchListRequest,
} from '../../store/watchList/actions';
import {
  isError,
  isLoading,
  isEmpty,
  getTotalPages,
  getCurrentPage,
  getWatchList,
} from '../../store/watchList/selectors';

class WatchListContainer extends Component {
  componentDidMount() {
    const { getWatchListRequest } = this.props;
    getWatchListRequest();
  }

  goToNextPage = page => {
    const { getWatchListRequest } = this.props;
    getWatchListRequest(page);
  };

  render() {
    return <WatchList {...this.props} goToNextPage={this.goToNextPage} />;
  }
}

WatchListContainer.propTypes = {
  operationsWatchListRequest: PropTypes.func.isRequired,
  getWatchListRequest: PropTypes.func.isRequired,
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
