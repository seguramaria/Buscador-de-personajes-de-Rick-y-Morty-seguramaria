import React from 'react';
import FilterByName from './FilterByName';
// import FiltersBySpecies from './FilterBySpecies';

//Vamos a puentear la función que recibe por arriba (de app) y pasarla por props hacia abajo (filterbyname)

const Filters = (props) => {
  const preventEvent = (ev) => {
    ev.preventDefault(ev);
  };
  return (
    <section>
      <form className="form" onSubmit={preventEvent}>
        <FilterByName handleFilter={props.handleFilter} />
        {/* <FiltersBySpecies handleFilter={props.handleFilter} /> */}
      </form>
    </section>
  );
};

export default Filters;
