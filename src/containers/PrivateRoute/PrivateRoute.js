import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, logged, ...rest }) => (
  <Route
    logged
    {...rest}
    render={props => (logged
      ? <Component {...props} {...rest} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
      }
  />
);

export default PrivateRoute;
