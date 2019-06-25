import { connect } from 'react-redux';
import Content from './component';
import { singleFilmRequest } from '../../../../store/singleFilm/actions';
import {
  isError,
  isLoading,
  searchResponse,
  isEmptyResponse,
  totalResults,
} from '../../../../store/search/selectors';

export const mstp = state => ({
  isLoading: isLoading(state),
  isError: isError(state),
  searchResponse: searchResponse(state),
  isEmpty: isEmptyResponse(state),
  totalResults: totalResults(state),
});

const mdtp = {
  singleFilmRequest,
};
export default connect(
  mstp,
  mdtp,
)(Content);
