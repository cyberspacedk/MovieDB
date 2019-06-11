/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { withFormik } from 'formik';
import { Input, Button } from 'antd';
import * as Yup from 'yup';

const Container = ({ values, errors, touched, auth, handleChange }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      console.log(values);
      const { rememberMe: _, ...user } = values;
      auth(user);
    }}
  >
    {touched.username && errors.username && <span>{errors.username} </span>}
    <Input
      type="text"
      name="username"
      placeholder="Username"
      value={values.username}
      onChange={handleChange}
    />
    {touched.password && errors.password && <span>{errors.password} </span>}
    <Input
      type="password"
      name="password"
      placeholder="password"
      value={values.password}
      onChange={handleChange}
    />
    <Button htmlType="submit" type="primary">
      Login
    </Button>
  </form>
);

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: '',
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, 'Маловато символов')
      .required('Обязательное поле'),
    password: Yup.string()
      .min(3, 'Короткий пароль')
      .required('Обязательное поле'),
  }),
})(Container);

export default FormikApp;
