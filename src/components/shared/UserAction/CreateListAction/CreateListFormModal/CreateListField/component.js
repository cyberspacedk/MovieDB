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
  field: PropTypes.shape(PropTypes.object),
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }),
};

export default CreateListField;
