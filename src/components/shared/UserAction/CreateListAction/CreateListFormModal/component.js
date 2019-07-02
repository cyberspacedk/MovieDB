import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'formik';
import { Modal } from 'antd';
import CreateListField from './CreateListField/component';

const CreateListFormModal = ({
  visibleMod,
  hideModal,
  handleSubmit,
  handleReset,
  errors,
}) => (
  <Modal
    title="Create list"
    visible={visibleMod}
    okButtonProps={{ disabled: errors.name || errors.description }}
    onCancel={() => {
      handleReset();
      hideModal();
    }}
    onOk={() => {
      handleSubmit();
      hideModal();
      setTimeout(handleReset, 0);
    }}
  >
    <Form>
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
  visibleMod: PropTypes.bool,
  hideModal: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleReset: PropTypes.func,
  errors: PropTypes.shape(PropTypes.object),
};
export default CreateListFormModal;
