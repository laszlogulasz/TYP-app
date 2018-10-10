import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Explore from '../../components/Explore';
import Info from '../../components/Info';
import Me from '../../components/Me';
import TypRoutes from '../TypRoutes';
import Login from '../../components/Login';
import Logout from '../../components/Logout';
import PrivateRoute from '../PrivateRoute';

const MainRoutes = (props) => {
  const { currentUser, logged } = props;
  return (
    <Switch>
      <Route path="/login" render={props => <Login logged={logged} {...props} />} />
      <PrivateRoute exact path="/" logged={logged} component={Explore} />
      <PrivateRoute
        path="/type"
        logged={logged}
        currentUser={currentUser}
        component={TypRoutes}
      />
      <PrivateRoute path="/me" logged={logged} currentUser={currentUser} component={Me} />
      <PrivateRoute path="/info" logged={logged} component={Info} />
      <Route path="/logout" component={Logout} />
      <Route render={() => (
        <h2>Houston, We&apos;ve Got a Problem 404...</h2>
      )}
      />
    </Switch>
  );
};

export default MainRoutes;
