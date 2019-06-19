import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

const FormButton = ({ form: { touched, errors } }) => (
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
);

FormButton.propTypes = {
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
};
export default FormButton;
