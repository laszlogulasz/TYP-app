import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';

const Info = (props) => {
  const { postsList } = props;
  return (
    <React.Fragment>
      <Header>
        <NavLink to="/info" activeClassName="current" aria-label="Get info about typ">
          <i className="fas fa-info-circle" />
        </NavLink>
      </Header>
      <main className="info content__box content__box--touch">
        <h2>
          About the
          {' '}
          <em>typ_</em>
        </h2>
        {postsList}
      </main>
    </React.Fragment>
  );
};

export default Info;
