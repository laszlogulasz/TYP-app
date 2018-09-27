import React from "react";
import {fire} from './../../fire';
import Post from '../Post/Post';
//import "./Explore.scss";

export default class Explore extends React.Component {

  state = {
    posts: false
  }

  componentDidMount() {
    this.getData();
  };

  getData = () => {
    let films = [];
    fire
      .database()
      .ref('films')
      .on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
          let item = childSnapshot.val();
          item.key = childSnapshot.key;
          films.push(item);
        });
      this.setState({posts: films});
    });
  };

  render() {
    let postsList = this.state.posts;
    if (!postsList) {
        return null
    }
    else {
      const posts = postsList.map(post => {
        return (
          <Post
            class={post.id}
            key={post.id}
            user={post.user}
            title={post.title}
            desc={post.desc}
          />)
        });
        return (
          <section className="explore">
            <h1>Enjoy the latest TYPs</h1>
            {posts}
        </section>
      )
    };
  }
}
