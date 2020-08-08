import React from 'react';

const FilterBySpecies = (props) => {
  console.log(props);
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'species',
      value: ev.target.value,
    });
  };

  return (
    <>
      <label htmlFor="species" className="form__label ">
        Filtrar por especie
      </label>
      <select
        id="species"
        name="species"
        className="form__input-text"
        value={props.filterSpecies}
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
