import React from 'react';
import { connect } from 'react-redux';
import { filterSwitch } from '../../actions';
import Draft from '../../components/Draft';
import Filters from '../../components/Filters';

const Stylize = (props) => {
  const {
    title, typ, typFilter, filterSwitch,
  } = props;

  return (
    <section className="content__box content__box--between">
      <Draft title={title} typ={typ} typFilter={typFilter} />
      <Filters typFilter={typFilter} filterSwitch={filterSwitch} />
    </section>
  );
};

const mapStateToProps = state => ({
  title: state.titleReducer,
  typ: state.typReducer,
  typFilter: state.filterReducer,
});

const mapDispatchToProps = { filterSwitch };

export default connect(mapStateToProps, mapDispatchToProps)(Stylize);
