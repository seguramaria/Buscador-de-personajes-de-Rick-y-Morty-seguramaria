import React from 'react';
import FilterByName from './FilterByName';
// import FiltersBySpecies from './FilterBySpecies';

//Vamos a puentear la función que recibe por arriba (de app) y pasarla por props hacia abajo (filterbyname)

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName handleFilter={props.handleFilter} />
        {/* <FiltersBySpecies handleFilter={props.handleFilter} /> */}
      </form>
    </section>
  );
};

export default Filters;
