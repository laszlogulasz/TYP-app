import React from "react";
import {Link} from 'react-router-dom';
import {fire, base, fbProvider} from '../../fire.js';

const Header = ({...props}) => {

  const fbAuth = () => {
    fire.auth().signInWithPopup(fbProvider);
  };

  const logo =
    <div className="logo">
      <Link role="button" className="outer" to="/" aria-label="home">
        <img
          alt="Logo: Litera T"
          src="assets/images/typ-logo.svg"
          className="inner"
          tabIndex="-1"
          />
      </Link>
    </div>;
//ukryj przycisk logout jeśli user jest niezalogowany
  let logout =
    <Link
      className={"button--link outer " + (!props.logged ? "none" : null)}
      to="/logout">
      <button className="header--button inner">LOG OUT</button>
    </Link>;
//pokaż przycisk logowania lub profilu profil
  let login = props.logged ?
    <Link
      role="button"
      className="button--link outer"
      to="/me"
      role="button"
      aria-label="me">
      <button className="header--button inner" tabIndex="-1">ME</button>
    </Link>
  :
    <span className="outer">
      <button className="header--button inner" onClick={() => {this.fbAuth()}}>
        LOG IN
      </button>
    </span>

  return (
    <header id="header">
      <div className="eq">{logout}</div>
      <div className="eq">{logo}</div>
      <div className="eq">{login}</div>
    </header>
  )
}

export default Header;
