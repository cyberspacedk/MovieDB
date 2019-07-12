import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tryAgain } from '../../../../store/authentifiction/actions';
import FailAuth from './component';

export class FailAuthContainer extends Component {
  componentDidMount() {
    const { tryAgain } = this.props;
    setTimeout(() => {
      tryAgain();
    }, 2000);
  }

  render() {
    return <FailAuth />;
  }
}

FailAuthContainer.propTypes = {
  tryAgain: PropTypes.func.isRequired,
};

const mdtp = {
  tryAgain,
};

export default connect(
  null,
  mdtp,
)(FailAuthContainer);
