import { connect } from 'react-redux';
import Content from './component';
import { getTotalResults } from '../../../../store/search/selectors';

export const mstp = state => ({
  searchResponse: getTotalResults(state),
});

export default connect(mstp)(Content);
