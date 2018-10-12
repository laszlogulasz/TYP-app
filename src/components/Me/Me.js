import React from 'react';
import Header from '../Header';
import Button from '../Button';

const Me = (props) => {
  const { postsList } = props;
  return (
    <React.Fragment>
      <Header posts>
        <li className="header__nav__icon">
          <Button to="/logout" title="Logout">
            <i className="fas fa-power-off inner" />
          </Button>
        </li>
      </Header>
      <main className="me content__box content__box--touch">
        {postsList.length > 0
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
          )}
        {postsList}
      </main>
    </React.Fragment>
  );
};

export default Me;
