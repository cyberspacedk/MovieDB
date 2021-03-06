import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'antd';

const { Item } = Form;

const CreateListField = ({ field, form: { touched, errors }, ...props }) => (
  <Item
    validateStatus={touched[field.name] && errors[field.name] && 'error'}
    help={errors[field.name]}
  >
    <Input type="text" {...field} {...props} />
  </Item>
);

CreateListField.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
};

export default CreateListField;
