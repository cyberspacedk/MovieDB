import { connect } from 'react-redux';
import { isAuthentificated } from '../../store/authentifiction/selectors';
import Home from './component';

export const mstp = state => ({
  isAuthentificated: isAuthentificated(state),
});

export default connect(mstp)(Home);
