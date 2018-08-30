import React from 'react';
import { Redirect } from 'react-router-dom';
import { fire, fbProvider } from '../../fire/fire';

class Login extends React.Component {
  state = {
    redirect: false,
  }

  fbAuth() {
    const { setCurrentUser } = this.props;
    fire
      .auth()
      .signInWithPopup(fbProvider)
      .then((user, error) => {
        if (error) {
          console.log('bubu');
        } else {
          setCurrentUser(user);
          this.setState({
            redirect: true,
          });
        }
      });
  }

  render() {
    const { location, logged } = this.props;
    const { redirect } = this.state;
    const { from } = location.state || { from: { pathname: '/' } };

    if (redirect === true || logged === true) {
      return <Redirect to={from} />;
    }
    return (
      <section className="login">
        <span className="outer">
          <button
            className="login__button inner"
            onClick={() => { this.fbAuth(); }}
            type="button"
          >
            LOG IN
          </button>
        </span>
      </section>
    );
  }
}

export default Login;
