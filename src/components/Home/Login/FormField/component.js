import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input, Form } from 'antd';

const { Item } = Form;

const FormField = ({ field, form: { touched, errors }, ...props }) => (
  <Item
    validateStatus={touched[field.name] && errors[field.name] && 'error'}
    help={errors[field.name]}
  >
    <Input
      type={field.name === 'password' ? 'password' : 'text'}
      {...field}
      {...props}
      prefix={
        <Icon
          type={field.name === 'username' ? 'user' : 'lock'}
          style={{ color: 'rgba(0,0,0,.25)' }}
        />
      }
    />
  </Item>
);

FormField.propTypes = {
  field: PropTypes.shape({ name: PropTypes.string }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
};
export default FormField;
