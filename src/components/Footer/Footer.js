import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  const { logged } = props;

  return (
    <footer className="footer">
      <Link
        className={`button__link outer ${!logged ? 'inactive' : ''}`}
        to="/type"
      >
        <button
          type="button"
          name="Type TYP"
          className={`footer__button inner ${!logged ? 'inactive' : ''}`}
          disabled={!logged}
          tabIndex="-1"
        >
          Type TYP
        </button>
      </Link>
      <Link
        className="button__link outer"
        to="/stylize"
      >
        <button
          type="button"
          name="Type TYP"
          className="footer__button inner"
          tabIndex="-1"
        >
          Stylize TYP
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
