import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from './rootReducer';
import logic from './rootlogic';

const deps = {
  httpClient: axios,
};

const logicMiddleware = createLogicMiddleware(logic, deps);

// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  devTools(applyMiddleware(logicMiddleware)),
);

export default store;
