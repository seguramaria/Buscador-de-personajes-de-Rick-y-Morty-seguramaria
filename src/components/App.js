import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/getDataFromApi';
import CharacterList from '../components/Characters/CharacterList';
// import CharacterCard from '../components/Characters/CharacterCard';

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

  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick & Morty App</h1>
      </header>
      <main>
        <CharacterList characters={characters} />
      </main>
    </div>
  );
};

export default App;
