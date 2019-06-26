/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
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
    this.props.getWatchListRequest();
  }

  render() {
    return (
      <WatchList
        {...this.props}
        removeWatch={this.props.operationsWatchListRequest}
      />
    );
  }
}

const mstp = state => ({
  watchList: getWatchList(state),
  isLoading: isLoading(state),
  isError: isError(state),
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
