import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'antd';

const { Item } = Form;
const { Search } = Input;

const SearchField = ({
  field,
  form: { touched, errors, handleSubmit },
  ...props
}) => (
  <Item
    validateStatus={touched[field.name] && errors[field.name] && 'error'}
    help={errors[field.name]}
  >
    <Search
      onSubmit={handleSubmit}
      placeholder="Enter movie name"
      size="large"
      enterButton="Search"
      className="top-margin"
      onSearch={handleSubmit}
      {...field}
      {...props}
    />
  </Item>
);

SearchField.propTypes = {
  field: PropTypes.shape({ name: PropTypes.string }),
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }),
};

export default SearchField;
