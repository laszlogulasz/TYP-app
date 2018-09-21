import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Draft from '../Draft';
import Filters from '../Filters';
import Header from '../Header/Header';
import Button from '../Button/Button';

const Stylize = (props) => {
  const {
    title, typ, typFilter, filterSwitch,
  } = props;

  if (typ === '' && title === '') {
    return <Redirect to='/' />;
  }
  return (
    <React.Fragment>
      <Header>
        <li className="header__nav__elem">
          <Button to="/type">Back</Button>
        </li>
        <li className="header__nav__elem">
          <Button to="/type/preview">
            Preview
          </Button>
        </li>
      </Header>
      <section className="content__box content__box--between">
        <Draft title={title} typ={typ} typFilter={typFilter} />
        <Filters typFilter={typFilter} filterSwitch={filterSwitch} />
      </section>
    </React.Fragment>
  );
};

export default Stylize;
