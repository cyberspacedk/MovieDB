import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'formik';
import { Button } from 'antd';
import FormField from './FormField/component';

const LoginForm = ({ values, errors, touched }) => (
  <Form>
    <FormField
      type="text"
      name="username"
      placeHolder="Username"
      value={values}
      errors={errors}
      touched={touched}
    />
    <FormField
      type="password"
      name="password"
      placeHolder="Password"
      value={values}
      errors={errors}
      touched={touched}
    />
    <Button
      htmlType="submit"
      type="primary"
      disabled={
        (touched.username && errors.username) ||
        (touched.password && errors.password)
      }
    >
      Login
    </Button>
  </Form>
);

LoginForm.propTypes = {
  values: PropTypes.shape().isRequired,
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
};

export default LoginForm;
