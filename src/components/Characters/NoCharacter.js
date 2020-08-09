import React from 'react';
import '../../stylesheets/Characters.scss';
import ImageNotFound from '../../images/no-morty.gif';

const NoCharacter = (props) => {
  return (
    <section className="no-character">
      <p>El nombre "{props.nameFilter}"" no coincide con ningún personaje</p>
      <img src={ImageNotFound} alt="No se ha encontrado el personaje"></img>
    </section>
  );
};

export default NoCharacter;
