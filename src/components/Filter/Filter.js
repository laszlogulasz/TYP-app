import React from 'react';

const Filter = (props) => {
  const {
    typFilter, id, filterSwitch,
  } = props;
  const handleFilterSwitch = e => filterSwitch(e.currentTarget.id);

  return (
    <li
      className={`filter__box ${id} ${typFilter === id && 'active'}`}
      id={id}
      role="button"
      onClick={handleFilterSwitch}
      onKeyPress={handleFilterSwitch}
    >
      <div>
        <h3>
          test
        </h3>
        <p>
          test
        </p>
      </div>
    </li>
  );
};

export default Filter;
