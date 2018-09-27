import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import titleReducer from './title';
import typReducer from './typ';

const rootReducer = combineReducers({
  titleReducer,
  typReducer,
  router
});

export default rootReducer;
