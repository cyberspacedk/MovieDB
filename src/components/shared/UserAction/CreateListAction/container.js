import React, { Component } from 'react';
import CreateListAction from './component';

class CreateListActionContainer extends Component {
  state = {
    visiblePop: false,
    visibleMod: false,
  };

  showPopover = visible => this.setState({ visiblePop: visible });

  hidePopover = () => this.setState({ visiblePop: false });

  showModal = () => this.setState({ visibleMod: true });

  hideModal = () => this.setState({ visibleMod: false });

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
      />
    );
  }
}
export default CreateListActionContainer;
