import React from 'react';
import '../../stylesheets/Characters.scss';

const NoCharacter = (props) => {
  return (
    <section>
      <p>El nombre {props.nameFilter} no coincide con ningún personaje</p>
      {/* <img src="https://steamuserimages-a.akamaihd.net/ugc/920290553152905607/4FD2AF939C0C9923B8B9DD9A7C65E9C6C145CF3A/"></img> */}
    </section>
  );
};

export default NoCharacter;
