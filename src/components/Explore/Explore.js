import React from 'react';
import { fire } from '../../fire';
import Post from '../Post/Post';

export default class Explore extends React.Component {
  state = {
    posts: false,
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const films = [];
    fire
      .database()
      .ref('films')
      .on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          films.push(item);
        });
        this.setState({ posts: films });
      });
  };

  render() {
    const { posts } = this.state;
    if (!posts) {
      return null;
    }

    const postsList = posts.map(post => (
      <Post
        id={post.id}
        key={post.id}
        user={post.user}
        title={post.title}
        desc={post.desc}
      />));
    return (
      <section className="explore">
        <h1>
Enjoy the latest TYPs
        </h1>
        {postsList}
      </section>
    );
  }
}
