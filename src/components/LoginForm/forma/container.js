/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './component';
import {
  authentification,
  newRequestToken,
} from '../../../Redux/Store/authentifiction/actions';
import {
  REQUEST_TOKEN_PATH,
  GET_SESSION_ID_LOGIN_PATH,
  GET_SESSION_ID_PATH,
} from '../../../api';

const ContainerForm = ({ authentification }) => {
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
    const { username, password } = userData;
    newRequestToken(REQUEST_TOKEN_PATH);

    authentification(
      GET_SESSION_ID_LOGIN_PATH,
      username,
      password,
      GET_SESSION_ID_PATH,
    );
  };

  return (
    <Form
      handleInputValue={handleInputValue}
      handleSubmitForm={handleSubmitForm}
    />
  );
};
const mdtp = {
  authentification,
};

ContainerForm.propTypes = {
  authentification: PropTypes.func.isRequired,
};

export default connect(
  null,
  mdtp,
)(ContainerForm);
