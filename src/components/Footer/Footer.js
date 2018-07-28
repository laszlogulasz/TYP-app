import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  const { logged } = props;

  return (
    <footer id="footer">
      <Link
        className={`button--link outer ${!logged ? 'inactive' : null}`}
        to="/type"
      >
        <button
          type="button"
          name="Type TYP"
          className={`footer--button inner ${!logged ? 'inactive' : null}`}
          disabled={!logged}
        >
          Type TYP
        </button>
      </Link>
      <Link
        className="button--link outer"
        to="/stylize"
      >
        <button
          type="button"
          name="Type TYP"
          className="footer--button inner"
        >
          Stylize TYP
        </button>
      </Link>
    </footer>
  );
};

export default Footer;
