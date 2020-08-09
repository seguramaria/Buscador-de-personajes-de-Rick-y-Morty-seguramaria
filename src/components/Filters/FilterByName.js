import React from 'react';
import '../../stylesheets/Filters.scss';

// En props va a recibir la función de su abuela (app.js) que se la ha pasado su madre por props (filters.js)
const FilterByName = (props) => {
  //Vamos a pasar por lifting la información que escribimos en los inputs hacia arriba. Desde filterbyname hasta app
  const handleChange = (ev) => {
    props.handleFilter({
      //lo pasamos como un objeto de datos. En un solo objeto enviamos información relativa a lo que ha sucedido. LLIFTING: Guardamos los datos desde FilterByName hasta App.
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
