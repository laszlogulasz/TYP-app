import React from 'react';
import Filter from '../Filter/Filter';

const Filters = (props) => {
  const { filterSwitch } = props;
  const stylelist = ['style1', 'style2', 'style3', 'style4', 'style5'];
  const filterList = stylelist.map(typStyle => (
    <Filter
      key={typStyle}
      id={typStyle}
      filterSwitch={filterSwitch}
    />
  ));

  return (
    <section className="filters">
      <ul className="filters__list">
        {filterList}
      </ul>
    </section>
  );
};

export default Filters;
