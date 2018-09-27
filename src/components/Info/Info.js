import React from 'react';
import { NavLink } from 'react-router-dom';
import { infoRef } from '../../fire/fire';
import Header from '../Header/Header';
import Post from '../Post/Post';
import Loader from '../Loader/Loader';

export default class Info extends React.Component {
  state = {
    posts: false,
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
      infoRef.off();
  }

  getData() {
    const typPost = [];
      infoRef.on("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        typPost.push(item);
      });
      this.setState({ posts: typPost });
    });
  };

  render() {
    const { posts } = this.state;
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
      />));
    return (
      <React.Fragment>
        <Header>
          <NavLink
            to="/info"
            activeClassName="current"
            aria-label="Get info about typ"
          >
            <i className="fas fa-info-circle"></i>
          </NavLink>
        </Header>
        <section className="info content__box">
          <h2>About the <em>typ_</em></h2>
          {postsList}
        </section>
      </React.Fragment>
    );
  }
}
