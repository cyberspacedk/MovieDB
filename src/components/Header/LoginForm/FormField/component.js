import React from 'react';
import PropTypes from 'prop-types';
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

const FormField = ({ field, form: { touched, errors }, ...props }) => (
  <FormItem>
    {touched[field.name] && errors[field.name] && (
      <span name="error-message">{errors[field.name]}</span>
    )}
    <input type="text" placeholder="Username" {...field} {...props} />
  </FormItem>
);

FormField.propTypes = {
  field: PropTypes.shape({ name: PropTypes.string }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
};
export default FormField;
