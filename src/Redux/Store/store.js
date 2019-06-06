import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/rootReducer';

const devTools =
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const thunkMiddleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  compose(
    devTools,
    thunkMiddleware,
  ),
);

export default store;
