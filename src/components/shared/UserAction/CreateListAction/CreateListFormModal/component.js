/* eslint-disable react/prop-types */
import React from 'react';
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

export default CreateListFormModal;
