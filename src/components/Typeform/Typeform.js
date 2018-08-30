import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import TextArea from '../TextArea/TextArea';

const Typeform = (props) => {
  const {
    titleChange, typChange, title, typ, typFilter, history,
  } = props;

  const cancel = e => {
    e.stopPropagation();
    history.goBack();
    titleChange('');
    typChange('');
  };

  return (
    <React.Fragment>
      <Header>
        <p onClick={cancel}>Cancel</p><Link to="/type/stylize" >Stylize</Link>
      </Header>
      <section className="content__box">
        <h2>
          Type your typ_ :)
        </h2>
        <form className={`typeform globaltyp ${typFilter}`}>
          <TextArea
            content={title}
            type={`title`}
            change={titleChange}
            placeholder={`Your great title`}
          />
          <TextArea
            content={typ}
            type={`typ`}
            change={typChange}
            placeholder={`Your brilliant toughts`}
          />
        </form>
      </section>
    </React.Fragment>
  );
};

export default Typeform;
