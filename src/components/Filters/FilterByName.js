import React from 'react';
import '../../stylesheets/Filters.scss';

const FilterByName = (props) => {
  //Lifting de la info de los inputs
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'nameFilter',
    });
  };

  return (
    <>
      <label className="label-name" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        placeholder="Ej: Morty"
        className="input-name"
        type="text"
        name="name"
        id="name"
        value={props.nameFilter}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
