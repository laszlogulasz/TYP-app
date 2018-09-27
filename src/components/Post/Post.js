import React from "react";

const Post = (props) => {

  return (
    <div className="post">
      <div className={"post__data style" + props.class}>
        <h4>{props.user}</h4>
        <i className="far fa-user fa-2x" aria-hidden="true"></i>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <ul className="post__more--list">
        <li className="post__more--elem">READ MORE...</li>
        <li className="post__more--elem">SHARE</li>
      </ul>
    </div>
  )
};

export default Post;
