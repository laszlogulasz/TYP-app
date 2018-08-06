import React from 'react';

const Draft = (props) => {
  const { title, typ, typFilter } = props;

  return (
    <section className="draft__box">
      <h2>
        Choose the perfect style!
      </h2>
      <article className={`draft globaltyp ${typFilter} inset`}>
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
