import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { infoRef } from '../../fire/fire';
import Header from '../Header';
import PostsList from '../../containers/PostsList';

const Info = (props) => {
  const { posts } = props;
  return (
    <React.Fragment>
      {posts && (
        <Header>
          <NavLink to="/info" activeClassName="current" aria-label="Get info about typ">
            <i className="fas fa-info-circle" />
          </NavLink>
        </Header>
      )}
      <main className="info content__box">
        {posts && (
          <h2>
            About the
            {' '}
            <em>typ_</em>
          </h2>
        )}
        <PostsList typRef={infoRef} {...props} />
      </main>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});

export default connect(mapStateToProps)(Info);
