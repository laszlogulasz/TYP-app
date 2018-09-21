import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  const { logged, user } = props;

  return (
    <footer
      className="footer"
      style={logged ? {visibility: 'visible'} : {visibility: 'hidden'}}
    >
      <NavLink
        to="/"
        exact
        activeClassName="current"
        aria-label="explore latest posts"
      >
        <i className="fas fa-home inner"></i>
      </NavLink>
      <NavLink
        to="/type"
        activeClassName="current"
        aria-label="Write new TYP"
      >
        <i className="fas fa-edit inner"></i>
      </NavLink>
      {
        user ?
        <NavLink
          to="/me"
          className="last"
          activeClassName="current"
          aria-label="Explore your TYPs"
        >
          <div className="shadow">
              <img
                className="profileImage"
                src={user.photoURL}
                alt={`Avatar of ${user.displayName}`}
              />
          </div>
        </NavLink>
        : <i className="fas fa-user-circle inner"></i>
        }
    </footer>
  );
};

export default Footer;
