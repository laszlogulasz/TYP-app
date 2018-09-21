import React from 'react';
import { Link } from 'react-router-dom';
import { typRef } from '../../fire/fire';
import Header from '../Header/Header';
import Post from '../Post/Post';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';

export default class Explore extends React.Component {
  state = {
    posts: false,
  }

  componentDidMount() {
    this.getData();
    typRef.on("child_removed", (snapshot) => {
    this.getData();
    });
  }

  componentWillUnmount() {
      typRef.off();
  }

  getData() {
    const {currentUser} = this.props;
    const typPosts = [];
      typRef.orderByChild("uid")
      .equalTo(currentUser.providerData[0].uid)
      .once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        typPosts.push(item);
      });
      typPosts.reverse();
      this.setState({ posts: typPosts });
    });
  };

  render() {
    const { posts } = this.state;
    const { match } = this.props;
    if (!posts) {
      return (
        <Loader />
      );
    }

    const postsList = posts.map(post => (
      <Post
        typFilter={post.filter}
        key={post.key}
        id={post.key}
        user={post.userName}
        uid={post.uid}
        title={post.title}
        typ={post.typ}
        url={match.url}
        visible
      />));
    return (
      <React.Fragment>
        <Header posts>
          <li className="header__nav__icon">
            <Button to="/logout" title="Logout">
              <i className="fas fa-power-off inner"></i>
            </Button>
          </li>
        </Header>
        <section className="me content__box">
          <h2>
            Your recent <em>typ_</em>s&nbsp;
            <span role="img" aria-label="spark">
            💫
            </span>
          </h2>
          {postsList}
        </section>
      </React.Fragment>
    );
  }
}
