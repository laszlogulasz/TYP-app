import React from 'react'
import App from "./app";
import style from "./style.scss";
import ReactDOM from 'react-dom'
import {Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store, history} from './store'
import {ConnectedRouter} from 'connected-react-router'

ReactDOM.render (
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <Route path='/' component={App} />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'))
