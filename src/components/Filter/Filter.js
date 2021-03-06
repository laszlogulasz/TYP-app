import React from 'react';

const Filter = (props) => {
  const { typFilter, id, filterSwitch } = props;
  const handleFilterSwitch = (e) => {
    filterSwitch(e.currentTarget.id);
  };
  return (
    <li className="filter">
      <div
        className={id === typFilter ? `filter__box ${id} active` : `filter__box ${id}`}
        id={id}
        role="button"
        onClick={handleFilterSwitch}
        onKeyPress={handleFilterSwitch}
        tabIndex="0"
      >
        <h3>Title</h3>
        <p>Article</p>
      </div>
      <h4 className="filter__name">{id}</h4>
    </li>
  );
};

export default Filter;
