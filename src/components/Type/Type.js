import React from "react";
import {connect} from 'react-redux';
import * as actionTypes from '../../reducers/actions';

const Type = (props) => {

  const handleTitleChange = (e) => {
    props.onTitleChange(e.target.value);
console.log(props.title);
  };

  const handleTypChange = (e) => {
    props.onTypChange(e.target.value);
  };

  return (
    <div className="me">
      <h1>Type your TYP :)</h1>
      <form>
        <input
          type="text"
          name="title"
          className="title"
          placeholder='Add title here'
          onChange={handleTitleChange}
          value={props.title}
        />
        <textarea
          className="typ--content"
          name="typ"
          placeholder='TYPe your thoughts ;)'
          onChange={handleTypChange}
          value={props.typ}
        />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    title: state.titleReducer.title,
    typ: state.typReducer.typ
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (title) => dispatch({
      type: actionTypes.UPDATE_TITLE, titleData: {title: title}
    }),
    onTypChange: (typ) => dispatch({
      type: actionTypes.UPDATE_TYP, typData: {typ: typ}
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Type);
