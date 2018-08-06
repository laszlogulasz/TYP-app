import React from 'react';

const Filter = (props) => {
  const {
    typFilter, id, filterSwitch,
  } = props;
  const handleFilterSwitch = e => {
    console.log(typFilter, id);
    return filterSwitch(e.currentTarget.id);
  };

  return (
    <li className="filter">
      <h4
        className={id === typFilter ? `filter__name ${id} active` : `filter__name ${id}`}
      >
        {id}
      </h4>
      <div
        className={id === typFilter ? `filter__box ${id} active` : `filter__box ${id}`}
        id={id}
        role="button"
        onClick={handleFilterSwitch}
        onKeyPress={handleFilterSwitch}
        tabIndex="0"
      >
        <h3>
          Title
        </h3>
        <p>
          Article
        </p>
      </div>
    </li>
  );
};

export default Filter;
