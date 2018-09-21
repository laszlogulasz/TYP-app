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
  }

  componentWillUnmount() {
      typRef.off();
  }

  getData() {
    const typPosts = [];
      typRef.on("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        typPosts.push(item);
        console.log(item.key);
      });
      typPosts.reverse();
      this.setState({ posts: typPosts });
    });
  };

  render() {
    const { posts } = this.state;
    const {currentUser} = this.props;
    if (!posts) {
      return (
        <Loader />
      );
    }

    const postsList = posts.map(post => (
      <Post
        typFilter={post.filter}
        key={post.key}
        uid={post.uid}
        user={post.userName}
        title={post.title}
        typ={post.typ}
        visible
      />));
    return (
      <React.Fragment>
        <Header posts>
          <li className="header__nav__icon">
            <Button to="/info">
              <i className="fas fa-info-circle inner"></i>
            </Button>
          </li>
        </Header>
        <section className="explore content__box">
          <h2>
            Enjoy the latest <em>typ_</em>s&nbsp;
            <span role="img" aria-label="thumb up">
            👍
            </span>
          </h2>
          {postsList}
        </section>
      </React.Fragment>
    );
  }
}
