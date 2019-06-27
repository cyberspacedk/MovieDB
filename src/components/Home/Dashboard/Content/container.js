import { connect } from 'react-redux';
import Content from './component';
import { searchResponse } from '../../../../store/search/selectors';

export const mstp = state => ({
  searchResponse: searchResponse(state),
});

export default connect(mstp)(Content);
