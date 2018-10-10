import React from 'react';
import { connect } from 'react-redux';
import { allRef } from '../../fire/fire';
import Header from '../Header';
import PostsList from '../../containers/PostsList';
import Button from '../Button';

const Me = (props) => {
  const { posts, currentUser } = props;
  return (
    <React.Fragment>
      {posts && (
        <Header posts>
          <li className="header__nav__icon">
            <Button to="/logout" title="Logout">
              <i className="fas fa-power-off inner" />
            </Button>
          </li>
        </Header>
      )}
      <main className="me content__box">
        {posts && (posts.length > 0
          ? (
            <h2>
              Your recent
              {' '}
              <em>typ_</em>
              s
              {' '}
              <span role="img" aria-label="spark">💫</span>
            </h2>
          ) : (
            <h2>
              Write some
              {' '}
              <em>typ_</em>
                s first
              {' '}
              <span role="img" aria-label="spark">💫</span>
            </h2>
          ))}
        <PostsList typRef={allRef} currentUser={currentUser} {...props} />
      </main>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});

export default connect(mapStateToProps)(Me);
