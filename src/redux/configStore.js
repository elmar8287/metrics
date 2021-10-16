import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import homeReducer from './home';

const reducer = combineReducers({
  homeReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunkMiddleware),
);

export default store;