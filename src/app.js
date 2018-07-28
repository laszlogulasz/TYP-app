import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Me from './components/Me';
import Type from './containers/Type/Type';
import Stylize from './containers/Stylize/Stylize';
import Logout from './components/Logout/Logout';
import { fire } from './fire';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      loading: true,
    };
  }

  componentWillMount() {
    this.removeAuthListener = fire.auth().onAuthStateChanged((user) => {
      user
        ? (this.setState({ logged: true, loading: false }))
        : (this.setState({ logged: false, loading: false }));
    });
  }

  componentWillUnmount() {
    this.removeAuthlistener();
  }

  render() {
    const { loading, logged } = this.state;

    if (loading === true) {
      return (
        <div>
          <h3>
            loading
          </h3>
        </div>
      );
    }
    return (
      <div className="container">
        <Header logged={logged} />
        <Switch>
          <Route exact path="/" component={Explore} />
          <Route path="/me" component={Me} />
          <Route path="/type" component={Type} />
          <Route path="/stylize" component={Stylize} />
          <Route path="/logout" component={Logout} />
        </Switch>
        <Footer logged={logged} />
      </div>
    );
  }
}
