import React from 'react';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import '../../stylesheets/Filters.scss';

const Filters = (props) => {
  const preventEvent = (ev) => {
    ev.preventDefault(ev);
  };
  return (
    <section>
      <form className="form" onSubmit={preventEvent}>
        <FilterByName
          handleFilter={props.handleFilter}
          nameFilter={props.nameFilter}
        />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          speciesFilter={props.speciesFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
