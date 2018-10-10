import React from 'react';
import { connect } from 'react-redux';
import AppContainer from './components/AppContainer';
import { loggingSwitch } from './actions';
import { authRef } from './fire/fire';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentUser: null,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 1);
    const { loggingSwitch: lgSwitch } = this.props;
    this.removeAuthListener = authRef.onAuthStateChanged((user) => {
      if (user) {
        lgSwitch(true);
        this.setState({ loading: false, currentUser: authRef.currentUser });
      } else {
        lgSwitch(false);
        this.setState({ loading: false, currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthlistener();
  }

  render() {
    const { loading, currentUser } = this.state;
    const { logged } = this.props;


    return (
      <AppContainer currentUser={currentUser} logged={logged} loading={loading} />
    );
  }
}

const mapStateToProps = state => ({
  logged: state.loggingReducer,
});

const mapDispatchToProps = { loggingSwitch };

export default connect(mapStateToProps, mapDispatchToProps)(App);
