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
    handleSubmit(values, { props, resetForm }) {
      const { authUser } = props;
      const { rememberMe: _, ...user } = values;
      resetForm();
      authUser(user);
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(4, 'Минимум 4 символа')
        .matches(/^[a-z0-9_-]{4,16}$/, 'Запрещенные символы')
        .required('Обязательное поле'),
      password: Yup.string()
        .min(6, 'Минимум 6 символов')
        .required('Обязательное поле'),
    }),
  }),
)(TempContainer);
