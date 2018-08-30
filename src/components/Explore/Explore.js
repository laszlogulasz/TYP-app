import React from 'react';
import { fire } from '../../fire/fire';
import Header from '../Header/Header';
import Post from '../Post/Post';
import Loader from '../Loader/Loader';

export default class Explore extends React.Component {

  state = {
    posts: false,
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const films = [];
    fire.database().ref('films').on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        films.push(item);
        console.log(item.key);
      });
      this.setState({ posts: films });
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
        key={post.id}
        user={post.displayName}
        title={post.title}
        desc={post.typ}
        visible
      />));
    return (
      <React.Fragment>
        <Header />
        <section className="explore">
          <h2>
            Enjoy the latest TYPs 👍
          </h2>
          {postsList}
        </section>
      </React.Fragment>
    );
  }
}
