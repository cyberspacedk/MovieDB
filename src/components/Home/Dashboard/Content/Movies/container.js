import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Movies from './component';
import { getQuery } from '../../../../../store/search/selectors';
import { searchRequest } from '../../../../../store/search/actions';

const mstp = state => ({
  query: getQuery(state),
});

const mdtp = {
  searchRequest,
};

export default compose(
  connect(
    mstp,
    mdtp,
  ),
  withRouter,
)(Movies);
