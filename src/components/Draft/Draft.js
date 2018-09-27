import React from 'react';

const Draft = (props) => {
  const { title, typ, typFilter } = props;

  return (
    <section className="draft__box">
      <h2>
        Choose your style &nbsp;
        <span role="img" aria-label="dancers">
        💃🕺
        </span>
      </h2>
      <article className={`draft globaltyp globaltyp--fadeOut ${typFilter}`}>
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

export default Draft;
