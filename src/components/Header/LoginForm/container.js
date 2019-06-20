import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { authUser } from '../../../store/authentifiction/actions';
import LoginForm from './component';

const mdtp = {
  authUser,
};

export const mapPropsToValues = () => ({
  username: '',
  password: '',
});

// РАЗОБРАТЬСЯ С ФУНКЦИЕЙ САБМИТА
export const handleSubmit = (values, { props, resetForm }) => {
  // eslint-disable-next-line no-shadow
  const { authUser } = props;
  const { rememberMe: _, ...user } = values;
  resetForm();
  authUser(user);
};

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Минимум 4 символа')
    .matches(/^[a-z0-9_-]{4,16}$/, 'Запрещенные символы')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Минимум 6 символов')
    .required('Обязательное поле'),
});
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
)(LoginForm);
