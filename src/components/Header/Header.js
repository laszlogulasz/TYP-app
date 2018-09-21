import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  const { logged, nologo } = props;
  return (
    <header
      className={nologo ? "header none" : "header"}
      style={logged ? { visibility: 'visible' } : { visibility: 'hidden' }}
    >
    <ul className="header__nav">
      {props.children}
    </ul>
    </header>
  );
};
const mapStateToProps = state => ({
  logged: state.loggingReducer,
});
export default connect(mapStateToProps)(Header);
