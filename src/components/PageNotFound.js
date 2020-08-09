import React from 'react';
import '../stylesheets/App.scss';
import ImageNotFound from '../images/rick-not-found.gif';
import { Link } from 'react-router-dom';

const NoCharacter = () => {
  return (
    <>
      <section className="no-character">
        <p>Página no encontrada</p>
        <img src={ImageNotFound} alt="No se ha encontrado el personaje"></img>
      </section>
      <Link to="/App" className="not-found__link"></Link>
    </>
  );
};

export default NoCharacter;
