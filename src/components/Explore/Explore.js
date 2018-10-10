import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { allRef } from '../../fire/fire';
import Header from '../Header';
import PostsList from '../../containers/PostsList';

const Explore = (props) => {
  const { posts } = props;
  return (
    <React.Fragment>
      {posts && (
        <Header posts>
          <NavLink to="/info" activeClassName="current" aria-label="Get info about typ">
            <i className="fas fa-info-circle" />
          </NavLink>
        </Header>)}
      <main className="explore content__box">
        {posts && (
          <h2>
            Enjoy the latest
            {' '}
            <em>typ_</em>
            s
            {' '}
            <span role="img" aria-label="thumb up">👍</span>
          </h2>
        )}
        <PostsList typRef={allRef} {...props} />
      </main>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});
export default connect(mapStateToProps)(Explore);
