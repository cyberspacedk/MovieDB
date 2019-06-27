/* eslint-disable no-shadow */
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import CreateListFormModal from './component';
import { createListRequest } from '../../../../../store/myLists/actions';

export const mapPropsToValues = () => ({
  name: '',
  description: '',
});

export const handleSubmit = (values, { props }) => {
  const { name, description } = values;
  const { createListRequest } = props;
  createListRequest(name, description);
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
)(CreateListFormModal);
