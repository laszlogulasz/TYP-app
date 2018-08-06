import React from 'react';
import { Link } from 'react-router-dom';
import { fire, fbProvider } from '../../fire';

const Header = (props) => {
  const { logged } = props;
  const fbAuth = () => {
    fire.auth().signInWithPopup(fbProvider);
  };

  const logo = (
    <div className="logo">
      <Link role="button" className="outer" to="/" aria-label="home">
        <img
          alt="Logo: Litera T"
          src="assets/images/typ-logo.svg"
          className="inner"
          tabIndex="-1"
        />
      </Link>
    </div>
  );
  // ukryj przycisk logout jeśli user jest niezalogowany
  const logout = (
    <Link
      className={`button__link outer ${!logged ? 'none' : ''}`}
      to="/logout"
    >
      <button
        className="header__button inner"
        name="log out"
        type="button"
        tabIndex="-1"
      >
        LOG OUT
      </button>
    </Link>
  );
  // pokaż przycisk logowania lub profilu profil
  const login = logged
    ? (
      <Link
        className="button__link outer"
        to="/me"
      >
        <button className="header__button inner" tabIndex="-1" type="button">
          ME
        </button>
      </Link>
    )
    : (
      <span className="outer">
        <button
          className="header__button inner"
          onClick={() => { fbAuth(); }}
          type="button"
        >
          LOG IN
        </button>
      </span>
    );

  return (
    <header id="header">
      {logout}
      {logo}
      {login}
    </header>
  );
};

export default Header;
