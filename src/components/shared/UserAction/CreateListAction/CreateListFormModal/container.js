import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import CreateListFormModal from './component';
import { createListRequest } from '../../../../../store/myLists/actions';
import constant from '../../../../../helpers/constants';

export class CreateListFormModalContainer extends Component {
  componentDidUpdate() {
    const { status, hideModal, handleReset } = this.props;
    if (status === constant.SUCCESS) {
      hideModal();
      handleReset();
    }
  }

  handleFormCancel = () => {
    const { handleReset, hideModal } = this.props;
    handleReset();
    hideModal();
  };

  handleFormSubmit = () => {
    const { handleSubmit } = this.props;
    handleSubmit();
  };

  render() {
    return (
      <CreateListFormModal
        {...this.props}
        handleFormCancel={this.handleFormCancel}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

CreateListFormModalContainer.defaultProps = {
  status: constant.WAITING,
};

CreateListFormModalContainer.propTypes = {
  hideModal: PropTypes.func,
  handleReset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  status: PropTypes.string,
};

export const mapPropsToValues = () => ({
  name: '',
  description: '',
});

export const handleSubmit = (values, formikBag) => {
  const { name, description } = values;
  const { createListRequest } = formikBag.props;
  createListRequest(name, description, formikBag);
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Минимум 3 символа')
    .matches(/^[A-Za-z0-9_-\s]{3,16}$/, 'Только буквы, цифры и тире')
    .required(),
  description: Yup.string()
    .min(3, 'Минимум 3 символа')
    .required(),
});
const mdtp = {
  createListRequest,
};

export default compose(
  connect(
    null,
    mdtp,
  ),
  withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
  }),
)(CreateListFormModalContainer);
