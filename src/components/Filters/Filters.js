import React from 'react';
import Filter from '../Filter/Filter';

const Filters = (props) => {
  const { filterSwitch, typFilter } = props;
  const stylelist = ['none', 'fancy', 'stickler', 'epic', 'marvell', 'orbital', 'janus'];
  const filterList = stylelist.map(typStyle => (
    <Filter
      key={typStyle}
      id={typStyle}
      filterSwitch={filterSwitch}
      typFilter={typFilter}
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
