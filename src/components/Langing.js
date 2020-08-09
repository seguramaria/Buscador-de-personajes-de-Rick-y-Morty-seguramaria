import React from 'react';
import { Link } from 'react-router-dom';
// import '../../stylesheets/Characters.scss';

const Landing = () => {
  return (
    <section>
      <header className="App-header">
        <h1>Rick y Morty </h1>
        <Link to="/App">
          <span className="modal__close icon fas fa-times"></span>
        </Link>
      </header>
      {/* <img src="https://steamuserimages-a.akamaihd.net/ugc/920290553152905607/4FD2AF939C0C9923B8B9DD9A7C65E9C6C145CF3A/"></img> */}
    </section>
  );
};

export default Landing;
