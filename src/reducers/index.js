import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import typReducer from './typ';
import filterReducer from './filter';
import loggingReducer from './logging';

const rootReducer = combineReducers({
  typReducer,
  filterReducer,
  loggingReducer,
  router,
});

export default rootReducer;
