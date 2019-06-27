import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import LoginForm from './component';
import { authRequest } from '../../../store/authentifiction/actions';
import { isFailAuth } from '../../../store/authentifiction/selectors';

export const mapPropsToValues = () => ({
  username: '',
  password: '',
});

export const handleSubmit = (values, { props, resetForm }) => {
  // eslint-disable-next-line no-shadow
  const { authRequest } = props;
  const { rememberMe: _, ...user } = values;
  authRequest(user);
  resetForm();
};

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-z0-9_-]{4,16}$/, 'Запрещенные символы')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(4, 'Минимум 4 символов')
    .required('Обязательное поле'),
});

const mstp = state => ({
  isFailAuth: isFailAuth(state),
});

const mdtp = {
  authRequest,
};

export default compose(
  connect(
    mstp,
    mdtp,
  ),
  withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
  }),
)(LoginForm);
