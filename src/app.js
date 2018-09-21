import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Me from './components/Me';
import Type from './containers/Type/Type';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { loggingSwitch } from './actions';
import { authRef } from './fire/fire';

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

class App extends React.Component {
  state = {
    loading: true,
    currentUser: null,
  };

  componentWillMount() {
    const { loggingSwitch } = this.props;
    this.removeAuthListener = authRef.onAuthStateChanged((user) => {
      if (user) {
        loggingSwitch(true);
        (this.setState({ loading: false, currentUser: authRef.currentUser }));
        console.log(user);
      } else {
        loggingSwitch(false);
        (this.setState({ loading: false, currentUser: null }));
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthlistener();
  }

  render() {
    const { loading, currentUser } = this.state;
    const { logged } = this.props;
    if (loading) {
      return (
        <div className="container" style={loading ? { zIndex: '-1' } : { zIndex: '1' }}>
          <Loader />
          <Footer logged={logged} />
        </div>
      );
    }

    return (
      <div className="container" style={loading ? { zIndex: '-1' } : { zIndex: '1' }}>
        <Switch>
          <Route path="/login" render={props => <Login logged={logged} {...props} />} />
          <PrivateRoute
            exact
            path="/"
            logged={logged}
            currentUser={currentUser}
            component={Explore}
          />
          <PrivateRoute
            path="/type"
            logged={logged}
            currentUser={currentUser}
            component={Type}
          />
          <PrivateRoute
            path="/me"
            logged={logged}
            component={Me}
            currentUser={currentUser}
          />
          <Route path="/logout" component={Logout} />
          <Route render={() => <h2>Houston, We&apos;ve Got a Problem 404...</h2>} />
        </Switch>
        <Footer logged={logged} user={currentUser} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logged: state.loggingReducer,
});

const mapDispatchToProps = { loggingSwitch };

export default connect(mapStateToProps, mapDispatchToProps)(App);
