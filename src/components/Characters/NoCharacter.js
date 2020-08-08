import React from 'react';

const NoCharacter = (props) => {
  return (
    <section>
      <p>El nombre {props.nameFilter} no coincide con ningún personaje</p>
    </section>
  );
};

export default NoCharacter;
