import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/getDataFromApi';
import Filters from '../components/Filters/Filters';
import CharacterList from '../components/Characters/CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  // React nos pide que en el primer nivel de componenge creemos un Hook. Pobemos el valor inicial del estado Characters dentro de useState, que será mi array de elementos y setCharacters será nuestra función para actualizar el estado. Resultado: Al arrancar la aplicación, products va a ser un array.
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState(''); //Esto nos actualizará el estado del filtro de NAME, en un inicio su estado será un sting vacío, ya que al arrancar no hay ningún filtro
  const [speciesFilter, setSpeciesFilter] = useState('all');

  //MONTAJE
  // Las tareas que queremos que se ejecuten una sola vez, las tenemos que hacer en un useEffect. PONEMOS EL SEGUNDO PARÁMTRO DE ESTA FUNCIÓN AL FINAL, PARA QUE NO HAYA UN BUCLE INFINITO. En ese array ponemos las dependencias por las cuales useEffect se tiene que volver a ejecutar
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // <---EVENT HANDLERS--->
  //En el padre ponemos siempre las funciones
  //PASAMOS EL MANEJADOR HACIA ABAJO, EN EL RETURN, LO PASAMOS POR PROPS.
  const handleFilter = (data) => {
    //Condicional que indica el filtro que va a actualizar su estado
    if (data.key === 'nameFilter') {
      setNameFilter(data.value);
    } else if (data.key === 'species') {
      setSpeciesFilter(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      console.log(character.species);
      if (speciesFilter === 'all') {
        return true;
      } else {
        return character.species === speciesFilter;
      }
    });

  // Tenemos que comparar el nombre del personaje con lo que hayamos escrito en nameFIlter y devolvemos un booleano que nos indica si el personaje en cuestión pasa o no pasa el filtro. Si yo le digo que todos los personajes pasan el filtro (true), me va a pintar los 20 personajes. Si le ponemos false, ningún personaje. Por lo que debemos decirle si es true o false con los filtros. //Usamos un método filter, primer parámetro el personaje(elemenos del array vharacter) que nos devuelve un booleano. Cuanso nameFIlter esté vacío nos devuelve true y aparecen todos los de la lista porque javascript entiende que no texto es texto.
  //Importante!! Usamos el método toUpperCase para que nos busque escribamos el nombre en mayúsculas o minúsculas.

  //Vamos a concatenar filtros porque queremos que se aniden los filtros, porque queremos buscar por nombre y además buscar por especies, pro lo que tenemos que concatenarlos //Para concatenar, hacemos un filter al final, puesto que el filter anterior nos devuelve un nuevo array y por lo tanto, podemos realizarle un nuevo filter a dicho array.
  //En este caso tenemos que filtrar es alien, humano o desocnocido, o, pero lo que tenemos en el estado es: "male" o "female". Por lo que ya no puede ser un includes, tiene que ser un ===, porque vamos a comparar campos extactos. Además, "female" incluye la palabra "male" por lo que puede darnos problemas.
  // if (speciesFilter === 'all') {
  //   return true;
  // } else {
  //   return character.species === speciesFilter;
  // }

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
        <h1>Rick y Morty </h1>
      </header>

      <Switch>
        {/* la lista de personajes está en una ruta exacta, por lo que cuando nos pasamos a la ruta variable de los personajes, desaparece el fondo, es decir, CharacterList no aparece en esa parte. Al igual que si no queremos que se vean los filtros */}
        <Route exact path="/">
          <Filters
            handleFilter={handleFilter}
            nameFilter={nameFilter}
            speciesFilter={speciesFilter}
          />
          {/* enviamos el estado nameFilterpor props para que si quiero poner por defecto un estado concreto, se pase por props hasta filtersByname donde asignaremos un value para siempre a sus inputs en el que le diremos que ese value siempre será nameFilter */}
          <CharacterList characters={filteredCharacters} />
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
