import React from "react";
import {connect} from 'react-redux';
import {titleChange, typChange} from '../../actions';
import Typeform from '../../components/Typeform';

const Type = (props) => {

const {titleChange, typChange, title, typ} = props;

  return (
    <Typeform titleChange={titleChange} typChange={typChange} title={title} typ={typ}/>
  )
}

const mapStateToProps = state => {
  return {
    title: state.titleReducer.title,
    typ: state.typReducer.typ
  }
};

const mapDispatchToProps = {titleChange, typChange};

export default connect(mapStateToProps, mapDispatchToProps)(Type);
