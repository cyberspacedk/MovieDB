import { connect } from 'react-redux';
import AboutFilm from './component';
import {
  isError,
  isLoading,
  aboutFilm,
} from '../../store/singleFilm/selectors';

const mstp = state => ({
  isError: isError(state),
  isLoading: isLoading(state),
  aboutFilm: aboutFilm(state),
});
export default connect(mstp)(AboutFilm);
