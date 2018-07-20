import React from "react";
import {connect} from 'react-redux';
import Draft from '../../components/Draft';
import Styles from '../../components/Styles';

const Stylize = (props) => {

const {title, typ, style} = props;

  return (
    <Draft title={title} typ={typ}/>
    <Styles />
  )
}

const mapStateToProps = state => {
  return {
    title: state.titleReducer.title,
    typ: state.typReducer.typ,
    style: state.styleReducer.style
  }
};

const mapDispatchToProps = {styleChange};

export default connect(mapStateToProps, mapDispatchToProps)(Stylize);
