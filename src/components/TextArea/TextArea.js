import React from 'react';

const TextArea = (props) => {
  const {
    content, type, change, placeholder,
  } = props;

  const handleChange = (e) => {
    change(e.target.value);
  };

  return (
    <div className="type__container">
      <textarea
        className={`type__content type__content--${type}`}
        name={`${type} content`}
        placeholder={placeholder}
        onChange={handleChange}
        value={content}
      />
      <div className={`type__containter--resize type__content--${type}`}>
        {content}
      </div>
    </div>
  );
};

export default TextArea;
