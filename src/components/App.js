import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/getDataFromApi';
import CharacterList from '../components/Characters/CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  // React nos pide que en el primer nivel de componenge creemos un Hook. Pobemos el valor inicial del estado Characters dentro de useState, que será mi array de elementos y setCharacters será nuestra función para actualizar el estado. Resultado: Al arrancar la aplicación, products va a ser un array.
  const [characters, setCharacters] = useState([]);

  //MONTAJE
  // Las tareas que queremos que se ejecuten una sola vez, las tenemos que hacer en un useEffect. PONEMOS EL SEGUNDO PARÁMTRO DE ESTA FUNCIÓN AL FINAL, PARA QUE NO HAYA UN BUCLE INFINITO. En ese array ponemos las dependencias por las cuales useEffect se tiene que volver a ejecutar
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  //Render: código que devuelve código html/jsx.
  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const character = characters.find(
      (character) => character.id === routeCharacterId
    );
    if (character) {
      return (
        <CharacterDetail
          name={character.name}
          image={character.image}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          status={character.status}
        />
      );
    } else {
      return <p>Personaje no encontrado</p>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick & Morty App</h1>
      </header>
      <main>
        <CharacterList characters={characters} />
        {/* //Pasamos los datos por props */}
        <Switch>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
