import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';

const Explore = (props) => {
  const { postsList } = props;
  return (
    <React.Fragment>
      <Header posts>
        <NavLink to="/info" activeClassName="current" aria-label="Get info about typ">
          <i className="fas fa-info-circle" />
        </NavLink>
      </Header>
      <main className="explore content__box content__box--touch">
        <h2>
          Enjoy the latest
          {' '}
          <em>typ_</em>
          s
          {' '}
          <span role="img" aria-label="thumb up">👍</span>
        </h2>
        {postsList}
      </main>
    </React.Fragment>
  );
};

export default Explore;
