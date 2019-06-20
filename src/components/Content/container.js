import { connect } from 'react-redux';
import Content from './component';
import {
  isError,
  isLoading,
  searchResponse,
  isEmptyResponse,
  totalPages,
} from '../../store/search/selectors';

export const mstp = state => ({
  isLoading: isLoading(state),
  isError: isError(state),
  searchResponse: searchResponse(state),
  emptyResponse: isEmptyResponse(state),
  totalPages: totalPages(state),
});
export default connect(mstp)(Content);
