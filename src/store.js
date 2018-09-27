import {applyMiddleware, createStore, compose} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {browserHistory} from 'react-router';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';



const history = createBrowserHistory()
const middleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(connectRouter(history)(rootReducer), composeEnhancers(applyMiddleware(middleware)));
export {store, history};
