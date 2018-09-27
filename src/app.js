import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import Cookies from './components/Cookies';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Info from './components/Info';
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
  constructor(props) {
    super(props);
    const { cookies } = this.props;
    this.state = {
        loading: true,
        currentUser: null,
        cookies: cookies.get('cookies') || false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 1);
    const { loggingSwitch } = this.props;
    this.removeAuthListener = authRef.onAuthStateChanged((user) => {
      if (user) {
        loggingSwitch(true);
        this.setState({ loading: false, currentUser: authRef.currentUser });
      } else {
        loggingSwitch(false);
        this.setState({ loading: false, currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthlistener();
  }

  handleCookiesAccept = () => {
    if (navigator.cookieEnabled) {
      const date = new Date();
      date.setTime(date.getTime() + (30 * 24*60*60*1000));
      document.cookie = `cookies=true; expires="${date.toGMTString()}; path="/"`;
    };
    this.setState({cookies: true});
  }

  render() {
    const { loading, currentUser, cookies } = this.state;
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
      <React.Fragment>
        <Cookies cookies={cookies} handleCookiesAccept={this.handleCookiesAccept} />
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
            <PrivateRoute
              path="/info"
              logged={logged}
              component={Info}
            />
            <Route path="/logout" component={Logout} />
            <Route render={() => <h2>Houston, We&apos;ve Got a Problem 404...</h2>} />
          </Switch>
          <Footer logged={logged} user={currentUser} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  logged: state.loggingReducer,
});

const mapDispatchToProps = { loggingSwitch };

const AppContainter = connect(mapStateToProps, mapDispatchToProps)(App);

export default withCookies(AppContainter);
