import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  const { logged, nologo, children } = props;
  return (
    <header
      className={nologo ? 'header none' : 'header'}
      style={logged ? { visibility: 'visible' } : { visibility: 'hidden' }}
    >
      <ul className="header__nav">{children}</ul>
    </header>
  );
};
const mapStateToProps = state => ({
  logged: state.loggingReducer,
});

export default connect(mapStateToProps)(Header);
