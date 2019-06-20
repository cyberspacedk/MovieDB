import { connect } from 'react-redux';
import UserInfo from './component';
import { userLogout } from '../../../store/authentifiction/actions';
import {
  getUserLogin,
  isAuthentificated,
} from '../../../store/authentifiction/selectors';

export const mstp = state => ({
  username: getUserLogin(state),
  sessionID: isAuthentificated(state),
});

const mdtp = {
  userLogout,
};

export default connect(
  mstp,
  mdtp,
)(UserInfo);
