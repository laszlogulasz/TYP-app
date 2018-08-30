import React from 'react';
import { Link } from 'react-router-dom';
import Draft from '../../components/Draft';
import Filters from '../../components/Filters';
import Header from '../Header/Header';

const Stylize = (props) => {
  const {
    title, typ, typFilter, filterSwitch, history,
  } = props;

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <React.Fragment>
      <Header>
        <h4 onClick={back}>back</h4><Link to="/type/preview" ><h4>Preview</h4></Link>
      </Header>
      <section className="content__box content__box--between">
        <Draft title={title} typ={typ} typFilter={typFilter} />
        <Filters typFilter={typFilter} filterSwitch={filterSwitch}/>
      </section>
    </React.Fragment>
  );
};

export default Stylize;
