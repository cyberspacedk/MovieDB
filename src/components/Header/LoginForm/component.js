import React from 'react';
import { Form, Field } from 'formik';
import FormField from './FormField/component';
import FormButton from './FormButton/component';

const LoginForm = () => (
  <Form>
    <Field name="username" component={FormField} />
    <Field name="password" component={FormField} />
    <Field component={FormButton} />
  </Form>
);

export default LoginForm;
