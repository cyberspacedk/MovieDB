import { connect } from 'react-redux';
import CreateListAction from './component';
import createListRequest from '../../../../store/myLists/actions';

const mdtp = {
  createListRequest,
};

export default connect(
  null,
  mdtp,
)(CreateListAction);
