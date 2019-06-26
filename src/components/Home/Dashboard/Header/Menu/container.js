import { connect } from 'react-redux';
import UserMenu from './component';
import { authLogout } from '../../../../../store/authentifiction/actions';
import { getUserLogin } from '../../../../../store/authentifiction/selectors';

export const mstp = state => ({
  username: getUserLogin(state),
});

const mdtp = {
  authLogout,
};

export default connect(
  mstp,
  mdtp,
)(UserMenu);
