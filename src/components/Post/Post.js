import React from 'react';

const Post = (props) => {
  const {
    id, user, title, desc,
  } = props;
  return (
    <div className="post">
      <div className={`post__data style${id}`}>
        <h4>
          {user}
        </h4>
        <i className="far fa-user fa-2x" aria-hidden="true" />
        <h3>
          {title}
        </h3>
        <p>
          {desc}
        </p>
      </div>
      <ul className="post__more--list">
        <li className="post__more--elem">
          READ MORE...
        </li>
        <li className="post__more--elem">
          SHARE
        </li>
      </ul>
    </div>
  );
};

export default Post;
