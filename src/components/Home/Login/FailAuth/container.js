import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tryAgain } from '../../../../store/authentifiction/actions';
import FailAuth from './component';

class FailAuthContainer extends Component {
  componentDidMount() {
    setTimeout(() => {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.tryAgain();
    }, 2000);
  }

  render() {
    return <FailAuth />;
  }
}

FailAuthContainer.propTypes = {
  tryAgain: PropTypes.func,
};

const mdtp = {
  tryAgain,
};

export default connect(
  null,
  mdtp,
)(FailAuthContainer);