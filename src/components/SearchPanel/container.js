/* eslint-disable no-shadow */
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import SearchPanel from './component';
import { searchRequest } from '../../store/search/actions';

export const mapPropsToValues = () => ({
  search: '',
});

export const handleSubmit = (values, { props, resetForm }) => {
  const { search } = values;
  const { searchRequest } = props;
  resetForm();
  searchRequest(search);
};

export const validationSchema = Yup.object().shape({
  search: Yup.string()
    .min(3, 'Минимум 3 символа')
    .matches(/^[A-Za-z0-9_-]{3,16}$/, 'Только буквы, цифры и тире'),
});
const mdtp = {
  searchRequest,
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
)(SearchPanel);
