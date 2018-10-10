import React from 'react';
import { Redirect } from 'react-router-dom';
import { fire } from '../../fire/fire';
import Loader from '../Loader';

export default class Logout extends React.Component {
  state = {
    redirect: false,
  }

  componentDidMount() {
    fire.auth().signOut().then(() => {
      this.setState({ redirect: true });
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect === true) { return <Redirect to="/" />; }
    return (
      <Loader />
    );
  }
}
