import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Post from '../../components/Post';
import Loader from '../../components/Loader';
import Explore from '../../components/Explore';
import Info from '../../components/Info';

class PostsList extends React.Component {
  componentDidMount() {
    this.getAllPosts();
  }

  componentDidUpdate(prevProps) {
    const { postsReset, match } = this.props;
    if (match.url !== prevProps.match.url) {
      postsReset();
      this.getAllPosts();
    }
  }

  componentWillUnmount() {
    const { typRef, postsReset } = this.props;
    postsReset();
    typRef.off();
  }

  getAllPosts() {
    const { typRef, postsUpdate, match } = this.props;
    const isMe = match.url === '/me';
    if (!isMe) {
      typRef.on('value', (snapshot) => {
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
  }

  render() {
    const { posts, match } = this.props;
    const isExplore = match.url === '/';
    const isInfo = match.url === '/info';
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
      <React.Fragment>
        {isExplore && <Explore postsList={postsList} />}
        {isInfo && <Info postsList={postsList} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = { ...actions };

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
