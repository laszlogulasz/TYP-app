import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  const { logged, currentUser } = props;

  return (
    <footer
      className="footer"
      style={logged ? {visibility: 'visible'} : {visibility: 'hidden'}}
    >
      <NavLink
        to="/"
        exact
        className="outer"
        activeClassName="current"
        aria-label="explore latest posts"
      >
        <i className="fas fa-home inner"></i>
      </NavLink>
      <NavLink
        to="/type"
        className="outer"
        activeClassName="current"
        aria-label="Write new TYP"
      >
        <i className="fas fa-edit inner"></i>
      </NavLink>
      <NavLink
        to="/me"
        className="outer last"
        activeClassName="current"
        aria-label="Explore your TYPs"
      >{
        currentUser ?
        <div className="column">
          <div className="shadow">
            <img
              className="profileImage"
              src={currentUser.photoURL}
              alt={`Profile picture of ${currentUser.displayName}`}
            />
        </div>
      </div>
        : <i className="fas fa-user-circle inner"></i>
        }
      </NavLink>
    </footer>
  );
};

export default Footer;
