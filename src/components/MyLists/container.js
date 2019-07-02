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
  isEmpty,
} from '../../store/myLists/selectors';

class MyListsContainer extends Component {
  state = {
    visibleMod: false,
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getCreatedListRequest();
  }

  showModal = () => this.setState({ visibleMod: true });

  hideModal = () => this.setState({ visibleMod: false });

  goToNextPage = page => {
    console.log(page);
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
  getCreatedListRequest: PropTypes.func,
};

const mstp = state => ({
  error: isError(state),
  loading: isLoading(state),
  empty: isEmpty(state),
  totalResults: getTotalPages(state),
  myLists: getMyList(state),
});

const mdtp = { getCreatedListRequest, deleteListRequest };

export default connect(
  mstp,
  mdtp,
)(MyListsContainer);
