import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WatchListAction from './component';
import { operationsWatchListRequest } from '../../../../store/watchList/actions';

class WatchListActionContainer extends Component {
  state = {
    watchListStatus: false,
  };

  handleWatchList = () => {
    // eslint-disable-next-line no-shadow
    const { operationsWatchListRequest, movieId } = this.props;
    this.setState(prevState => ({
      watchListStatus: !prevState.watchListStatus,
    }));
    operationsWatchListRequest(movieId, true);
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

WatchListActionContainer.propTypes = {
  operationsWatchListRequest: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
};

const mdtp = {
  operationsWatchListRequest,
};

export default connect(
  null,
  mdtp,
)(WatchListActionContainer);
