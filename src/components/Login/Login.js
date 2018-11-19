import React from 'react';
import { Redirect } from 'react-router-dom';
import { fire, fbProvider, credential } from '../../fire/fire';
import Button from '../Button';

class Login extends React.Component {
  state = {
    redirect: false,
    error: false,
  };

  fbAuth() {
    fire
      .auth()
      .signInWithPopup(fbProvider)
      .then((user, error) => {
        if (error) {
          this.setState({ error: true });
        } else {
          this.setState({ redirect: true });
        }
      });
  }

  testAuth() {
    fire
      .auth()
      .signInAndRetrieveDataWithCredential(credential)
      .then((user, error) => {
        if (error) {
          this.setState({ error: true });
        } else {
          this.setState({ redirect: true });
        }
      });
  }

  render() {
    const { location, logged } = this.props;
    const { redirect, error } = this.state;
    const { from } = location.state || { from: { pathname: '/' } };
    if (redirect === true || logged === true) {
      return <Redirect to={from} />;
    }
    return (
      <section className="login">
        <div className="logo" />
        {error ? (
          <h2>
            Oooops, please try again
            <span role="img" aria-label="Hands pressed together">
              🙏
            </span>
          </h2>
        ) : (
          <h2 style={{ padding: '15px' }}>
            Write posts with style!
            <br />
            Just start typing and choose typography filter that fits your toughts
            {' '}
            <span role="img" aria-label="information desk man">
              💁‍♂️
            </span>
            <br />
          </h2>
        )}
        <Button
          className="login__icon"
          onClick={() => {
            this.fbAuth();
          }}
        >
          <i className="fab fa-facebook-square" />
          <span className="login__elem"> Login with Facebook</span>
        </Button>
        <p className="login__user-info">or</p>
        <Button
          className="login__icon"
          onClick={() => {
            this.testAuth();
          }}
        >
          <i className="fas fa-vial" />
          <span className="login__elem"> Enter as Test user</span>
        </Button>
      </section>
    );
  }
}

export default Login;
