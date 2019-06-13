/* eslint-disable react/prop-types */
import React from 'react';
import { Field } from 'formik';
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
    width: 100%;
    left: -100%;
    top: 0;
    color: #f70f16;
    font-size: 0.9rem;
  }
`;
const FormField = ({ type, name, placeHolder, value, errors, touched }) => (
  <FormItem>
    {touched[name] && errors[name] && (
      <span name="error-message">{errors[name]}</span>
    )}

    <Field
      type={type}
      name={name}
      placeholder={placeHolder}
      value={value[name]}
    />
  </FormItem>
);

export default FormField;
