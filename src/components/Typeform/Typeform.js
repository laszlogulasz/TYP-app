import React from "react";

const Typeform = (props) => {

  const {titleChange, typChange, title, typ} = props;

  const handleTitleChange = (e) => {
    titleChange(e.target.value);
    console.log(title);
  };

  const handleTypChange = (e) => {
    typChange(e.target.value);
  };
  return (
    <div className="me">
      <h1>Type your TYP :)</h1>
      <form className="tapeform">
        <div className="tape__container">
          <textarea
            className="type__content type__content--title"
            name="title"
            placeholder='Add title here'
            onChange={handleTitleChange}
            value={title}
          />
          <div className="type__containter--resize type__content--title">
            {title + '\n'}
          </div>
        </div>
        <div className="tape__container">
          <textarea
            className="type__content type__content--typ"
            name="typ"
            placeholder='TYPe your thoughts ;)'
            onChange={handleTypChange}
            value={typ}
          />
          <div className="type__containter--resize type__content--typ">
            {typ + '\n'}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Typeform;
