import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { logged } = props;
  return (
    <header id="header" style={logged ? {visibility: 'visible'} : {visibility: 'hidden'}}>
      {props.children}
    </header>
  );
};
const mapStateToProps = state => {
    return {
        logged: state.loggingReducer,
    };
};
export default connect(mapStateToProps)(Header);
