import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Post from '../../components/Post';
import Loader from '../../components/Loader';
import Me from '../../components/Me';

class PostsList extends React.Component {
  componentDidMount() {
    const { typRef } = this.props;
    this.getUserPosts();
    typRef.on('child_removed', () => {
      this.getUserPosts();
    });
  }

  componentWillUnmount() {
    const { typRef, postsReset } = this.props;
    postsReset();
    typRef.off();
  }

  getUserPosts() {
    const { typRef, postsUpdate, currentUser } = this.props;
    typRef.orderByChild('uid')
      .equalTo(currentUser.providerData[0].uid)
      .once('value', (snapshot) => {
        const typPosts = [];
        snapshot.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          typPosts.push(item);
        });
        typPosts.reverse();
        postsUpdate(typPosts);
      });
  }

  render() {
    const { posts, match } = this.props;
    if (!posts) { return <Loader />; }
    const postsList = posts.map(post => (
      <Post
        typFilter={post.filter}
        key={post.key}
        id={post.key}
        uid={post.uid}
        user={post.userName}
        title={post.title}
        typ={post.typ}
        url={match.url}
      />));
    return (
      <Me postsList={postsList} />
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
