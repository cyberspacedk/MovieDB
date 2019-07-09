import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import SearchPanel from './component';
import { searchRequest } from '../../../../../store/search/actions';

export const mapPropsToValues = () => ({
  search: '',
});

export const handleSubmit = (values, { props }) => {
  const { search } = values;
  const { searchRequest } = props;
  searchRequest(search);
};

export const validationSchema = Yup.object().shape({
  search: Yup.string()
    .min(3, 'Минимум 3 символа')
    .matches(/^[A-Za-z0-9_-\s]{3,16}$/, 'Только буквы, цифры и тире')
    .required(),
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
