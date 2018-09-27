import React from 'react';
import { Redirect } from 'react-router-dom';
import { fire, fbProvider } from '../../fire/fire';
import Button from '../Button/Button';

class Login extends React.Component {
  state = {
    redirect: false,
    error: false
  }

  fbAuth() {
    const { setCurrentUser } = this.props;
    fire
      .auth()
      .signInWithPopup(fbProvider)
      .then((user, error) => {
        if (error) {
          this.setState({
            error: true,
          });
        } else {
          this.setState({
            redirect: true,
          });
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
        <div className="logo"></div>
        {error ? (
          <h2>
            Oooops, please try again
            <span role="img" aria-label="Hands pressed together">
              🙏
            </span>
          </h2>
          ) : (
            <h2 style={{padding: "15px"}}>
              Write posts with style!<br/>
            Just start typing and choose typography filter that fits your toughts {` `}
            <span role="img" aria-label="information desk man">
              💁‍♂️
            </span>
              <br/>
            </h2>
          )
        }
          <Button className="login__icon"
            onClick={() => { this.fbAuth(); }}
          >
            <i className="fab fa-facebook-square"></i>
            <span className="login__elem">&nbsp; Login with Facebook</span>
        </Button>
      </section>
    );
  }
}

export default Login;
