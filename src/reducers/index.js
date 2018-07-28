import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import titleReducer from './title';
import typReducer from './typ';
import filterReducer from './filter';

const rootReducer = combineReducers({
  titleReducer,
  typReducer,
  filterReducer,
  router,
});

export default rootReducer;
