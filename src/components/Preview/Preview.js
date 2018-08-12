import React from 'react';

const Preview = (props) => {
  const {
    id, user, title, typ, typFilter,
  } = props;
  return (
    <section className="preview">
      <article className={`preview__data ${typFilter}`}>
        <h4>
          {user}
        </h4>
        <i className="far fa-user fa-2x" aria-hidden="true" />
        <h3>
          {title}
        </h3>
        <p>
          {typ}
        </p>
      </article>
    </section>
  );
};

export default Preview;
