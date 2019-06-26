import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import UserMenu from './component';
import { authLogout } from '../../../../../store/authentifiction/actions';
import { getUserLogin } from '../../../../../store/authentifiction/selectors';

export const mstp = state => ({
  username: getUserLogin(state),
});

const mdtp = {
  authLogout,
};

export default compose(
  connect(
    mstp,
    mdtp,
  ),
  withRouter,
)(UserMenu);
