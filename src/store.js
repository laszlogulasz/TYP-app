import { applyMiddleware, createStore, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';


const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer), composeEnhancers(applyMiddleware(middleware)),
);
export { store, history };
