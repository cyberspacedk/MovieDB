/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MyList from './component';
import {
  getCreatedListRequest,
  deleteListRequest,
} from '../../store/myLists/actions';
import {
  getMyList,
  isError,
  isLoading,
  getTotalPages,
  getCurrentPage,
  isEmpty,
} from '../../store/myLists/selectors';

class MyListsContainer extends Component {
  state = {
    visibleMod: false,
  };

  componentDidMount() {
    this.props.getCreatedListRequest();
  }

  showModal = () => this.setState({ visibleMod: true });

  hideModal = () => this.setState({ visibleMod: false });

  goToNextPage = page => {
    this.props.getCreatedListRequest(page);
  };

  render() {
    const { visibleMod } = this.state;

    return (
      <MyList
        showModal={this.showModal}
        hideModal={this.hideModal}
        visibleMod={visibleMod}
        goToNextPage={this.goToNextPage}
        {...this.props}
      />
    );
  }
}

MyListsContainer.propTypes = {
  getCreatedListRequest: PropTypes.func.isRequired,
};

const mstp = state => ({
  error: isError(state),
  loading: isLoading(state),
  empty: isEmpty(state),
  totalResults: getTotalPages(state),
  currentPage: getCurrentPage(state),
  myLists: getMyList(state),
});

const mdtp = { getCreatedListRequest, deleteListRequest };

export default connect(
  mstp,
  mdtp,
)(MyListsContainer);
