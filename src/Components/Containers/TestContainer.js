import { connect } from 'react-redux';
import testSelector from '../../Redux/Selectors/testSelector';
import { plus, minus, reset } from '../../Redux/Actions/testActions';
import TestContainer from '../TestComponent/TestComponent';

const mapStateToProps = store => ({
  value: testSelector(store),
});

const mapDispatchToProps = dispatch => ({
  testPlus: () => dispatch(plus()),
  testMinus: () => dispatch(minus()),
  testReset: () => dispatch(reset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestContainer);
