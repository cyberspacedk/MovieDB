/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { authUser } from '../../../store/authentifiction/actions';
import LoginForm from './component';

const TempContainer = props => <LoginForm {...props} />;

const mdtp = {
  authUser,
};

export default compose(
  connect(
    null,
    mdtp,
  ),
  withFormik({
    mapPropsToValues() {
      return {
        username: '',
        password: '',
      };
    },
    handleSubmit(values, { props }) {
      const { authUser } = props;
      const { rememberMe: _, ...user } = values;
      authUser(user);
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(4, 'Маловато символов')
        .required('Обязательное поле'),
      password: Yup.string()
        .min(3, 'Короткий пароль')
        .required('Обязательное поле'),
    }),
  }),
)(TempContainer);
