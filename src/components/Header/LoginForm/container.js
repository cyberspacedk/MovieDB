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
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}$/g,
          'минимум один спец.сивол, цифрa и буквa в верхнем и нижнем регистре',
        )
        .required('Обязательное поле'),
    }),
  }),
)(TempContainer);
