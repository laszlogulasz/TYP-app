import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';
import './style.scss';
import App from './app';

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App} />
      </ConnectedRouter>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root'),
);
