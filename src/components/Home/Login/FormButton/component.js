import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const FormButton = ({ form: { touched, errors, isSubmitting } }) => (
  <Button
    htmlType="submit"
    type="primary"
    disabled={
      (touched.username && errors.username) ||
      (touched.password && errors.password)
    }
    loading={isSubmitting}
  >
    Log in
  </Button>
);

FormButton.propTypes = {
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }),
};
export default FormButton;
