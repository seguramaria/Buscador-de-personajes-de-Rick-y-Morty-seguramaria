import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/getDataFromApi';
import Filters from '../components/Filters/Filters';
import CharacterList from '../components/Characters/CharacterList';
import CharacterDetail from './Characters/CharacterDetail';
import Landing from './Landing';
import Header from './Header';
import PageNotFound from './PageNotFound';

const App = () => {
  // ESTADOS
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');

  //MONTAJE
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // EVENT HANDLERS: Manejadores que pasaremos luego hacia abajo

  //Condicional que indica el filtro que va a actualizar su estado
  const handleFilter = (data) => {
    if (data.key === 'nameFilter') {
      setNameFilter(data.value);
    } else if (data.key === 'species') {
      setSpeciesFilter(data.value);
    }
  };

  //Filtrado de personajes
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter((character) => {
      if (speciesFilter === 'all') {
        return true;
      } else {
        return character.species === speciesFilter;
      }
    });

  // Organizar los personajes por orden alfabético
  characters.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  //Renderizamos
  const renderCharacterDetail = (props) => {
    //Match. Parseamos porque necesitamos un número y nuestras id son strings
    const routeCharacterId = parseInt(props.match.params.id);
    // Buscamos el id
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
      return <PageNotFound />;
    }
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/App">
          <Header />
          <Filters
            handleFilter={handleFilter}
            nameFilter={nameFilter}
            speciesFilter={speciesFilter}
          />

          <main className="main">
            <CharacterList
              characters={filteredCharacters}
              nameFilter={nameFilter}
            />
          </main>
        </Route>

        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
