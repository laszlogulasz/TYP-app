import React from 'react';

const Typeform = (props) => {
  const {
    titleChange, typChange, title, typ, typFilter,
  } = props;

  const handleTitleChange = (e) => {
    titleChange(e.target.value);
    console.log(title);
  };

  const handleTypChange = (e) => {
    typChange(e.target.value);
  };
  return (
    <section className="content__box">
      <h2>
        Type your TYP :)
      </h2>
      <form className={`typeform globaltyp ${typFilter}`}>
        <div className="type__container">
          <textarea
            className="type__content type__content--title"
            name="title"
            placeholder="your great title"
            onChange={handleTitleChange}
            value={title}
          />
          <div className="type__containter--resize type__content--title">
            {title + '\n'}
          </div>
        </div>
        <div className="type__container">
          <textarea
            className="type__content type__content--typ"
            name="typ"
            placeholder="TYPe your thoughts ;)"
            onChange={handleTypChange}
            value={typ}
          />
          <div className="type__containter--resize type__content--typ">
            {typ + '\n'}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Typeform;
