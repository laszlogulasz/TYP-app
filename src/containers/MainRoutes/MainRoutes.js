import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { allRef, infoRef } from '../../fire/fire';
import TypRoutes from '../TypRoutes';
import Login from '../../components/Login';
import Logout from '../../components/Logout';
import PostsList from '../PostsList';
import UserPostsList from '../UserPostsList';
import PrivateRoute from '../PrivateRoute';

const MainRoutes = (props) => {
  const { currentUser, logged } = props;
  return (
    <Switch>
      <Route path="/login" render={props => <Login logged={logged} {...props} />} />
      <PrivateRoute
        exact
        path="/"
        logged={logged}
        component={PostsList}
        typRef={allRef}
      />
      <PrivateRoute
        path="/type"
        logged={logged}
        currentUser={currentUser}
        component={TypRoutes}
      />
      <PrivateRoute
        path="/me"
        logged={logged}
        currentUser={currentUser}
        component={UserPostsList}
        typRef={allRef}
      />
      <PrivateRoute
        path="/info"
        logged={logged}
        component={PostsList}
        typRef={infoRef}
      />
      <Route path="/logout" component={Logout} />
      <Route render={() => (
        <h2>Houston, We&apos;ve Got a Problem 404...</h2>
      )}
      />
    </Switch>
  );
};

export default MainRoutes;
