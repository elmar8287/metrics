import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import details from './details';
import home from './home';

const rootReducer = combineReducers({ home, details });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
