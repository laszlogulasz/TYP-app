import React from 'react';
import { Redirect } from 'react-router-dom';
import Draft from '../Draft';
import Filters from '../Filters';
import Header from '../Header';
import Button from '../Button';

const Stylize = (props) => {
  const {
    title, typ, typFilter, filterSwitch, history,
  } = props;
  if (typ === '') { return <Redirect to="/" />; }
  return (
    <React.Fragment>
      <Header>
        <li className="header__nav__elem">
          <button type="button" onClick={() => history.goBack()}>Back</button>
        </li>
        <li className="header__nav__elem">
          <Button to="/type/preview">Preview</Button>
        </li>
      </Header>
      <main className="content__box content__box--between">
        <Draft title={title} typ={typ} typFilter={typFilter} />
        <Filters typFilter={typFilter} filterSwitch={filterSwitch} />
      </main>
    </React.Fragment>
  );
};

export default Stylize;
