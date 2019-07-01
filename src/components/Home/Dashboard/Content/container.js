import { connect } from 'react-redux';
import Content from './component';
import { getSearchResponse } from '../../../../store/search/selectors';

export const mstp = state => ({
  searchResponse: getSearchResponse(state),
});

export default connect(mstp)(Content);
