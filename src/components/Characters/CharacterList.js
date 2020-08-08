import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  console.log(props);
  //Al haber pasado los datos por props al componente en app.js, aquí los recibimos
  const charactersElements = props.characters.map((character) => {
    //Siempre que recorramos para pintar, debemos usar map
    //Vamos a pintar los lis, pero necesitamos una key, podemos usar el index o los IDs. Si tenemos id, siempre mejor id.
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        name={character.name}
        image={character.image}
        species={character.species}
        status={character.status}
      />
    ); //vamos a pasar las props para que cada personaje tenga sus datos
  });
  return (
    <section>
      <ul className="cards">
        {charactersElements}
        {/* //pintamos el array recorrido */}
      </ul>
    </section>
  );
};

export default CharacterList;
