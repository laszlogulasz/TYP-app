import React from "react";

const Draft = (props) => {

  const {title, typ, styleClass} = props;

  return (
    <div className="me">
      <h1>Style your TYP :)</h1>
      <article className={"draft " + ${styleClass}}>
        <h3>{title}</h3>
        <p>{typ}</p>
      </article>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    title: state.titleReducer.title,
    typ: state.typReducer.typ
  }
};
