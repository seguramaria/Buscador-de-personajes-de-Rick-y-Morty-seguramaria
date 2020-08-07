import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  //Al haber pasado los datos por props al componente en app.js, aquí los recibimos
  const characterElements = props.characters.map((character) => {
    //Siempre que recorramos para pintar, debemos usar map
    //Vamos a pintar los lis, pero necesitamos una key, podemos usar el index o los IDs. Si tenemos id, siempre mejor id.
    return <CharacterCard key={character.id} character={character} />; //vamos a pasar las props para que cada usuaria tenga sus datos
  });
  return (
    <section>
      <ul className="cards">
        {characterElements}
        {/* //pintamos el array recorrido */}
      </ul>
    </section>
  );
};

export default CharacterList;
