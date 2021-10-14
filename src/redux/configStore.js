import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import detailsReducer from './details';
import countriesReducer from './home';

const reducer = combineReducers({ countriesReducer, detailsReducer });

const store = createStore(reducer,
  applyMiddleware(thunk),);

export default store;
