import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'formik';
import { Button } from 'antd';
import styled from 'styled-components';

const FormItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  input {
    margin-bottom: 3px;
  }
  [name='error-message'] {
    position: absolute;
    left: -80%;
    top: 0;
    color: #f70f16;
    font-size: 0.9rem;
  }
`;

const LoginForm = ({ values, errors, touched }) => (
  <Form>
    <FormItem>
      {touched.username && errors.username && (
        <span name="error-message">{errors.username}</span>
      )}
      <Field
        type="text"
        name="username"
        placeholder="Username"
        value={values.username}
      />
    </FormItem>
    <FormItem>
      {touched.password && errors.password && (
        <span name="error-message">{errors.password}</span>
      )}
      <Field
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
      />
    </FormItem>
    <FormItem>
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
    </FormItem>
  </Form>
);

LoginForm.propTypes = {
  values: PropTypes.shape().isRequired,
  errors: PropTypes.shape().isRequired,
  touched: PropTypes.shape().isRequired,
};

export default LoginForm;
