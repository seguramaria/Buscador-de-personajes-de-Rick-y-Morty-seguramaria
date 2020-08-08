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
    //pasamos datos por aquí y recibimos la información que puede sernos útil. History: relativo al historico de páginas que hemos visitado. Location: relativo a la información que tenemos ahora mismo. match: cómo coincide la información que hemos puesto en   <Route path="/character/:id", nos dice que es exacto, Los params es un id con su valor. (Porque hemos puesto que se llame id, si pusiera otra cosa pondría otra cosa. Por eso ponemos dos puntos, para que sepa que es un dato variable). Ejemplo: id-1, id-2, etc.
    const routeCharacterId = parseInt(props.match.params.id);
    // buscamos el id- Vamos a hacer un find sobre nuestro array de datos
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
          episodes={character.episodes}
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

      <Switch>
        {/* la lista de personajes está en una ruta exacta, por lo que cuando nos pasamos a la ruta variable de los personajes, desaparece el fondo, es decir, CharacterList no aparece en esa parte. Al igual que si no queremos que se vean los filtros */}
        <Route exact path="/">
          <CharacterList characters={characters} />
        </Route>

        {/* //Pasamos los datos por props */}
        <Route path="/character/:id" render={renderCharacterDetail} />
        {/* componente route donde le indicamos cómo debe comportarse. Le tenemos
          que indicar que todo lo que sea character barra algo, lo tiene que gestionar con el render y con ese método. Los dos puntos es porque es una variable. */}
      </Switch>
    </div>
  );
};

export default App;
