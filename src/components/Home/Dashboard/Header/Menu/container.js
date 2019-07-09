import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import UserMenu from './component';
import { authLogout } from '../../../../../store/authentifiction/actions';
import { getUserLogin } from '../../../../../store/authentifiction/selectors';

class MenuContainer extends Component {
  handleLogout = () => {
    const { authLogout, history } = this.props;
    authLogout();
    history.push('/');
  };

  render() {
    const { username } = this.props;
    return <UserMenu username={username} handleLogout={this.handleLogout} />;
  }
}

MenuContainer.propTypes = {
  authLogout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  username: PropTypes.string.isRequired,
};

const mstp = state => ({
  username: getUserLogin(state),
});

const mdtp = {
  authLogout,
};

export default compose(
  connect(
    mstp,
    mdtp,
  ),
  withRouter,
)(MenuContainer);
