import React from 'react';
import Header from './components/Header';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Me from './components/Me';
import Type from './components/Type';
import Logout from './components/Logout/Logout.js';
import {fire, fbProvider} from './fire';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
        ? (this.setState({logged: true, loading: false}))
        : (this.setState({logged: false, loading: false}))
    })
  }

  componentWillunmount() {
    this.removeAuthlistener();
  }

  render() {
    if (this.state.loading === true) {
      return (
      <div>
        <h3>loading</h3>
      </div>
      )
    }
    return (
      <div className="container">
        <Header logged={this.state.logged} />
        <Switch>
          <Route exact path='/' component={Explore} />
          <Route path='/me' component={Me} />
          <Route path='/type'component={Type} />
          <Route path='/logout' component={Logout} />
        </Switch>
        <Footer logged={this.state.logged} />
      </div>
    )
  }
}
