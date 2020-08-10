import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import NoCharacter from './NoCharacter';
import '../../stylesheets/Characters.scss';

const CharacterList = (props) => {
  //Recorremos para pintar => debemos usar map
  const charactersElements = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        name={character.name}
        image={character.image}
        species={character.species}
        status={character.status}
      />
    ); //vamos a pasar las props hacia abajo que cada personaje tenga sus datos
  });

  //Condicional personaje no encontrado
  if (charactersElements.length === 0)
    return <NoCharacter nameFilter={props.nameFilter} />;

  return (
    <ul className="characterlist">
      {charactersElements}
      {/* //pintamos el array recorrido */}
    </ul>
  );
};

CharacterList.propTypes = {
  data: PropTypes.array,
};

export default CharacterList;
