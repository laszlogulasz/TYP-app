import React from 'react';
import Header from '../Header';
import TextArea from '../TextArea';
import Button from '../Button';

const Typeform = (props) => {
  const {
    titleChange, typChange, title, typ, typFilter, typReset, history,
  } = props;
  const cancel = () => {
    typReset();
    history.goBack();
  };
  const stylize = (typ !== '')
    ? (
      <li className="header__nav__elem">
        <Button to="/type/stylize">Stylize</Button>
      </li>
    )
    : (
      <li
        className="header__nav__elem  header__nav__elem--inactive"
        title="Start typing :)"
      >
        Stylize
      </li>
    );
  return (
    <React.Fragment>
      <Header>
        <li>
          <button type="button" className="header__nav__elem" onClick={cancel}>
            Cancel
          </button>
        </li>
        {stylize}
      </Header>
      <main className="content__box content__box--type">
        <h2>
          Type your
          {' '}
          <em>typ_</em>
          {' '}
          <span role="img" aria-label="writing hand">✍️</span>
        </h2>
        <form className={`typeform globaltyp ${typFilter}`}>
          <TextArea
            content={title}
            type="title"
            change={titleChange}
            placeholder="Your great title (if wish)"
          />
          <TextArea
            content={typ}
            type="typ"
            change={typChange}
            placeholder="Your brilliant toughts"
          />
        </form>
      </main>
    </React.Fragment>
  );
};

export default Typeform;
