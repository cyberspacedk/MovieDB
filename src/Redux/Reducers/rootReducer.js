import { combineReducers } from 'redux';

import counter from './counter';

const rootReducer = combineReducers({
  value: counter,
});

export default rootReducer;
