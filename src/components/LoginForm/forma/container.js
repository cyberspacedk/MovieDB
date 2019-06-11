import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './component';
import { authUser } from '../../../Redux/Store/authentifiction/actions';

// eslint-disable-next-line no-shadow
const ContainerForm = ({ authUser }) => {
  let userData = {
    username: '',
    password: '',
  };

  const handleInputValue = ({ target }) => {
    userData = {
      ...userData,
      [target.name]: target.value,
    };
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    authUser(userData);
  };

  return (
    <Form
      handleInputValue={handleInputValue}
      handleSubmitForm={handleSubmitForm}
    />
  );
};
const mdtp = {
  authUser,
};

ContainerForm.propTypes = {
  authUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  mdtp,
)(ContainerForm);
