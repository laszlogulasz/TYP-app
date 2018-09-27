import React from "react";
import {Link} from 'react-router-dom';

 const Footer = (props) => {

  return (
    <footer id="footer">
      <Link
        className={"button--link outer " + (!props.logged ? "inactive" : null)}
        to="/type">
        <button
          type="button"
          name="Type TYP"
          className={"footer--button inner " + (!props.logged ? "inactive" : null)}
          disabled={!props.logged}>
          Type TYP
        </button>
      </Link>
    </footer>
  )
}

export default Footer;
