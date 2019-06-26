/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import WatchListAction from './component';
import { operationsWatchListRequest } from '../../../../store/watchList/actions';

class WatchListActionContainer extends Component {
  state = {
    watchListStatus: false,
  };

  handleWatchList = () => {
    this.setState(prevState => ({
      watchListStatus: !prevState.watchListStatus,
    }));
    this.props.operationsWatchListRequest(this.props.movieId, true);
  };

  render() {
    const { watchListStatus } = this.state;
    return (
      <WatchListAction
        handleWatchList={this.handleWatchList}
        watchListStatus={watchListStatus}
      />
    );
  }
}

const mdtp = {
  operationsWatchListRequest,
};

export default connect(
  null,
  mdtp,
)(WatchListActionContainer);
