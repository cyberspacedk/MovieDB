import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCreatedListRequest,
  addMovieToListRequest,
} from '../../../../store/myLists/actions';
import { getLists } from '../../../../store/myLists/selectors';
import CreateListAction from './component';

class CreateListActionContainer extends Component {
  state = {
    visiblePop: false,
    visibleMod: false,
  };

  showPopover = visible => {
    this.props.getCreatedListRequest();
    this.setState({ visiblePop: visible });
  };

  hidePopover = () => this.setState({ visiblePop: false });

  showModal = () => this.setState({ visibleMod: true });

  hideModal = () => this.setState({ visibleMod: false });

  addMovieToList = (listId, movieId) => {
    this.props.addMovieToListRequest(listId, movieId);
    this.hidePopover();
  };

  showDialog = () => {
    this.showModal();
    this.hidePopover();
  };

  render() {
    const { visiblePop, visibleMod } = this.state;

    return (
      <CreateListAction
        visiblePop={visiblePop}
        visibleMod={visibleMod}
        showPopover={this.showPopover}
        hidePopover={this.hidePopover}
        showModal={this.showModal}
        hideModal={this.hideModal}
        addMovieToList={this.addMovieToList}
        showDialog={this.showDialog}
        {...this.props}
      />
    );
  }
}

CreateListActionContainer.propTypes = {
  getCreatedListRequest: PropTypes.func.isRequired,
  addMovieToListRequest: PropTypes.func.isRequired,
  myLists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mstp = store => ({
  myLists: getLists(store),
});

const mdtp = {
  getCreatedListRequest,
  addMovieToListRequest,
};

export default connect(
  mstp,
  mdtp,
)(CreateListActionContainer);
