import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authUser } from '../../../store/authentifiction/actions';
import LoginForm from './component';

const ContainerForm = ({ auth }) => <LoginForm auth={auth} />;
const mdtp = {
  auth: authUser,
};

ContainerForm.propTypes = {
  auth: PropTypes.func.isRequired,
};

export default connect(
  null,
  mdtp,
)(ContainerForm);
