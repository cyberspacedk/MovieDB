import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'formik';
import { Modal, Alert } from 'antd';
import CreateListField from './CreateListField/component';

const CreateListFormModal = ({
  visibleMod,
  errors,
  handleFormCancel,
  handleFormSubmit,
}) => (
  <Modal
    title="Create list"
    visible={visibleMod}
    okButtonProps={{ disabled: errors.name || errors.description }}
    onCancel={handleFormCancel}
    onOk={handleFormSubmit}
  >
    <Form>
      {errors && errors.status && (
        <Alert
          message="Fail list creation."
          description={errors.status}
          type="error"
        />
      )}
      <Field
        name="name"
        placeholder="Type list name"
        component={CreateListField}
      />
      <Field
        name="description"
        placeholder="Type list description"
        component={CreateListField}
      />
    </Form>
  </Modal>
);

CreateListFormModal.propTypes = {
  visibleMod: PropTypes.bool.isRequired,
  handleFormCancel: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default CreateListFormModal;
