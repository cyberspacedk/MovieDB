import { connect } from 'react-redux';
import Header from './component';
import { authLogout } from '../../../../store/authentifiction/actions';
import {
  getUserLogin,
  isAuthentificated,
} from '../../../../store/authentifiction/selectors';

export const mstp = state => ({
  username: getUserLogin(state),
  sessionID: isAuthentificated(state),
});

const mdtp = {
  authLogout,
};

export default connect(
  mstp,
  mdtp,
)(Header);
