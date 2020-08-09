import React from 'react';
import '../../stylesheets/Filters.scss';

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'species',
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor="species" className="label-species ">
        Filtrar por especie
      </label>
      <select
        id="species"
        name="species"
        className="select-species"
        value={props.speciesFilter}
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="Alien">Alienígena</option>
        <option value="Human">Humano</option>
      </select>
    </>
  );
};

export default FilterBySpecies;
