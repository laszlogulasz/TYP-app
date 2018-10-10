import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import typReducer from './typ';
import filterReducer from './filter';
import loggingReducer from './logging';
import postsReducer from './posts';

const rootReducer = combineReducers({
  typReducer,
  filterReducer,
  loggingReducer,
  postsReducer,
  router,
});

export default rootReducer;
