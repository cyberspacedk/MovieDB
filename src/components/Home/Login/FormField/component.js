import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input, Form } from 'antd';

const { Item } = Form;

const FormField = ({
  type,
  name,
  icon,
  field,
  form: { touched, errors },
  ...props
}) => (
  <Item
    validateStatus={touched[name] && errors[name] && 'error'}
    help={errors[name]}
  >
    <Input
      type={type}
      {...field}
      {...props}
      prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
    />
  </Item>
);

FormField.propTypes = {
  field: PropTypes.shape({ name: PropTypes.string }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
