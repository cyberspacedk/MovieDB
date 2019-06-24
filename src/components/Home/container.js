import { connect } from 'react-redux';
import { isAuthentificated } from '../../store/authentifiction/selectors';
import HomeWay from './component';

export const mstp = state => ({
  isAuthentificated: isAuthentificated(state),
});

export default connect(mstp)(HomeWay);
