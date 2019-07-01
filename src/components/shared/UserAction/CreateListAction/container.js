import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCreatedListRequest } from '../../../../store/myLists/actions';
import { getMyList } from '../../../../store/myLists/selectors';
import CreateListAction from './component';

class CreateListActionContainer extends Component {
  state = {
    visiblePop: false,
    visibleMod: false,
  };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getCreatedListRequest();
  }

  showPopover = visible => this.setState({ visiblePop: visible });

  hidePopover = () => this.setState({ visiblePop: false });

  showModal = () => this.setState({ visibleMod: true });

  hideModal = () => this.setState({ visibleMod: false });

  render() {
    const { visiblePop, visibleMod } = this.state;
    const { myLists } = this.props;
    return (
      <CreateListAction
        visiblePop={visiblePop}
        visibleMod={visibleMod}
        showPopover={this.showPopover}
        hidePopover={this.hidePopover}
        showModal={this.showModal}
        hideModal={this.hideModal}
        myLists={myLists}
      />
    );
  }
}

CreateListActionContainer.propTypes = {
  getCreatedListRequest: PropTypes.func.isRequired,
  myLists: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mstp = store => ({
  myLists: getMyList(store),
});

const mdtp = {
  getCreatedListRequest,
};

export default connect(
  mstp,
  mdtp,
)(CreateListActionContainer);
