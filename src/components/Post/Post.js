import React from 'react';

const Post = (props) => {
  const {
    user, title, desc, typFilter, visible,
  } = props;
  return (
    <div className="post">
      <article className={`post__data globaltyp ${typFilter}`}>
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
      </article>
      <ul className={visible ? "post__list post__list--visible" : "post__list"}>
        <li className="post__list__elem">
          Read more...
        </li>
        <li className="post__list__elem">
          Share
        </li>
      </ul>
    </div>
  );
};

export default Post;
