import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

const FormButton = ({ form: { touched, errors } }) => (
  <Button
    htmlType="submit"
    type="primary"
    loading
    disabled={
      (touched.username && errors.username) ||
      (touched.password && errors.password)
    }
  >
    Log in
  </Button>
);

FormButton.propTypes = {
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
};
export default FormButton;
