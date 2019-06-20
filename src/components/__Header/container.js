import { connect } from 'react-redux';
import { isAuthentificated } from '../../store/authentifiction/selectors';
import ParentForm from './component';

export const mstp = state => ({
  isLogin: isAuthentificated(state),
});

export default connect(mstp)(ParentForm);
