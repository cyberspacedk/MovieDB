import { combineReducers } from 'redux';
import topFilmsReducer from './topFilmsReducer';

const rootReducer = combineReducers({
  topFilms: topFilmsReducer,
});

export default rootReducer;
