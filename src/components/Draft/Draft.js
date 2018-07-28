import React from 'react';

const Draft = (props) => {
  const { title, typ, typFilter } = props;

  return (
    <div className="me">
      <h1>
Style your TYP :)
      </h1>
      <article className={`draft globaltyp ${typFilter}`}>
        <h3>
          {title}
        </h3>
        <p>
          {typ}
        </p>
      </article>
    </div>
  );
};

export default Draft;
